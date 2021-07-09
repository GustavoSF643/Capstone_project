import { Card, CardDescription, ButtonContainer, CardInfo } from "./style";
import ButtonFavorites from "../../Atomos/ButtonFavorites";

interface CardPetProps {
  name: string;
  breed: string;
  gender: string;
  age: number;
  handleClick: () => void;
}

const CardPet = ({ name, breed, gender, age, handleClick }: CardPetProps) => {
  return (
    <Card onClick={handleClick}>
      <ButtonContainer>
        <ButtonFavorites />
      </ButtonContainer>
      <CardInfo>
        <CardDescription>
          <h1>{name}</h1>
          <div>
            <h2>Raca</h2>
            <h2>{breed}</h2>
          </div>
          <div>
            <h2>Genero</h2>
            <h2>{gender}</h2>
          </div>
          <div>
            <h2>Idade</h2>
            <h2>{age}</h2>
          </div>
        </CardDescription>
      </CardInfo>
    </Card>
  );
};
export default CardPet;
