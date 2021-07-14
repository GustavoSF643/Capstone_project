import api from "../../../services/api";
import CardPet from "../../Molecules/CardPet";
import { UserFavoritesDiv, NotFavoritesDiv } from "./style";
import { useUserInfo } from "../../../Providers/UserInfo";
import { User } from "../../../types/User";
import { ProviderProps } from "../../../types/ProviderProps";

interface Pet {
  img: string;
  name: string;
  breed: string;
  gender: string;
  age: number;
  id: number;
}

const UserFavorites = () => {
  const {
    user: { favorites },
  }: ProviderProps = useUserInfo();

  return (
    <UserFavoritesDiv>
      {favorites &&
        favorites.map((pet) => (
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
      {favorites && favorites.length === 0 && (
        <NotFavoritesDiv>
          <h3>Você não possui pets favoritos.</h3>
        </NotFavoritesDiv>
      )}
    </UserFavoritesDiv>
  );
};

export default UserFavorites;
