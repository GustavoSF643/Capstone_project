import { Button } from "./style";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { DecodedProps } from "../../../types/DecodedProps";
import api from "../../../services/api";

interface Pet {
  img: string;
  name: string;
  breed: string;
  gender: string;
  age: number;
  id: number;
}

interface ButtonFavoritesProps {
  pet: Pet;
}

const ButtonFavorites = ({ pet }: ButtonFavoritesProps) => {
  const [like, setLike] = useState(false);
  const [token] = useState<string | null>(
    JSON.stringify(localStorage.getItem("@petMacher:token") || null)
  );

  const checkFavorites = () => {
    if (token) {
      const decode: DecodedProps = jwt_decode(token);
      const newToken = JSON.parse(token);
      api
        .get(`users/${decode.sub}`, {
          headers: {
            Authorization: `Bearer ${newToken}`,
          },
        })
        .then((user: any) => {
          setLike(
            user.data.favorites.some(
              (petFavorite: any) => petFavorite.id === pet.id
            )
          );
        })
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    checkFavorites();
  }, [token]);

  const addLike = () => {
    if (token) {
      const decode: DecodedProps = jwt_decode(token);
      const newToken = JSON.parse(token);
      api
        .get(`users/${decode.sub}`, {
          headers: {
            Authorization: `Bearer ${newToken}`,
          },
        })
        .then((user: any) => {
          return user.data.favorites;
        })
        .then((response) =>
          api
            .patch(
              `users/${decode.sub}`,
              { favorites: [...response, pet] },
              {
                headers: {
                  Authorization: `Bearer ${newToken}`,
                },
              }
            )
            .then((response: any) => checkFavorites())
            .catch((err) => console.error(err))
        )
        .catch((err) => console.error(err));
    }
  };

  const removeLike = () => {
    if (token) {
      const decode: DecodedProps = jwt_decode(token);
      const newToken = JSON.parse(token);
      api
        .get(`users/${decode.sub}`, {
          headers: {
            Authorization: `Bearer ${newToken}`,
          },
        })
        .then((user: any) => {
          const filtered = user.data.favorites.filter(
            (petFavorite: any) => petFavorite.id !== pet.id
          );
          return filtered;
        })
        .then((response) =>
          api
            .patch(
              `users/${decode.sub}`,
              { favorites: [...response] },
              {
                headers: {
                  Authorization: `Bearer ${newToken}`,
                },
              }
            )
            .then((response: any) => checkFavorites())
            .catch((err) => console.error(err))
        )
        .catch((err) => console.error(err));
    }
  };

  return (
    <>
      {like ? (
        <Button onClick={removeLike}>
          <FaHeart />
        </Button>
      ) : (
        <Button onClick={addLike}>
          <FaRegHeart />
        </Button>
      )}
    </>
  );
};
export default ButtonFavorites;
