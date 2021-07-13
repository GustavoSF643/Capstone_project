import { Card, CardDescription, ButtonContainer, CardInfo } from "./style";
import ButtonFavorites from "../../Atomos/ButtonFavorites";
import { PetProps } from "./../../../types/DecodedProps";
import { useHistory } from "react-router-dom";

interface CardPetProps {
  img: string;
  name: string;
  breed: string;
  gender: string;
  age: number;
  id: number;
}

const CardPet = ({ img, name, breed, gender, age, id }: CardPetProps) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/dashboard/${id}`);
  };

  return (
    <Card img={img} onClick={handleClick}>
      <ButtonContainer onClick={(e) => e.stopPropagation()}>
        <ButtonFavorites
          pet={{
            img: img,
            name: name,
            breed: breed,
            gender: gender,
            age: age,
            id: id,
          }}
        />
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
