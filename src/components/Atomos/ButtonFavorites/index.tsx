import { Button } from "./style";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import api from "../../../services/api";
import { useUserInfo } from "../../../Providers/UserInfo";
import { User } from "../../../types/User";
import { AxiosResponse } from "axios";

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

interface ProviderProps {
  user: User;
  tokenParse: string;
}

const ButtonFavorites = ({ pet }: ButtonFavoritesProps) => {
  const [like, setLike] = useState(false);

  const {
    user: { favorites, id },
    tokenParse,
  }: ProviderProps = useUserInfo();

  const checkFavorites = () => {
    api
      .get(`users/${id}`, {
        headers: {
          Authorization: `Bearer ${tokenParse}`,
        },
      })
      .then((user: AxiosResponse) =>
        setLike(
          user.data.favorites.some(
            (petFavorite: Pet) => petFavorite.id === pet.id
          )
        )
      )
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    if (favorites) {
      checkFavorites();
    }
  }, [favorites]);

  const addLike = () => {
    api
      .get(`users/${id}`, {
        headers: {
          Authorization: `Bearer ${tokenParse}`,
        },
      })
      .then((user: AxiosResponse) => {
        return user.data.favorites;
      })
      .then((response) =>
        api
          .patch(
            `users/${id}`,
            { favorites: [...response, pet] },
            {
              headers: {
                Authorization: `Bearer ${tokenParse}`,
              },
            }
          )
          .then((response) => checkFavorites())
          .catch((err) => console.error(err))
      )
      .catch((err) => console.error(err));
  };

  const removeLike = () => {
    api
      .get(`users/${id}`, {
        headers: {
          Authorization: `Bearer ${tokenParse}`,
        },
      })
      .then((user: AxiosResponse) => {
        const filtered = user.data.favorites.filter(
          (petFavorite: Pet) => petFavorite.id !== pet.id
        );
        return filtered;
      })
      .then((response) =>
        api
          .patch(
            `users/${id}`,
            { favorites: [...response] },
            {
              headers: {
                Authorization: `Bearer ${tokenParse}`,
              },
            }
          )
          .then((response) => checkFavorites())
          .catch((err) => console.error(err))
      )
      .catch((err) => console.error(err));
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
