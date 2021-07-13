import { useEffect, useState } from "react";
import api from "../../../services/api";
import CardPet from "../../Molecules/CardPet";
import { UserFavoritesDiv } from "./style";

interface UserFavoritesProps {
  userId: string;
}

interface Pet {
  img: string;
  name: string;
  breed: string;
  gender: string;
  age: number;
  id: number;
}

const UserFavorites = ({ userId }: UserFavoritesProps) => {
  const [token] = useState<string | null>(
    localStorage.getItem("@petMacher:token")
  );
  const [userFavorites, setUserFavorites] = useState<Pet[]>([]);
  useEffect(() => {
    if (token) {
      api
        .get(`users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((user: any) => setUserFavorites(user.data.favorites))
        .catch((err) => console.error(err));
    }
  }, [token]);
  return (
    <UserFavoritesDiv>
      {userFavorites &&
        userFavorites.map((pet) => (
          <CardPet
            key={pet.id}
            img={pet.img}
            name={pet.name}
            breed={pet.breed}
            gender={pet.gender}
            age={pet.age}
            id={pet.id}
          />
        ))}
    </UserFavoritesDiv>
  );
};

export default UserFavorites;
