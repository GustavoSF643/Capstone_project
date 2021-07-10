import { Card, CardDescription, ButtonContainer, CardInfo } from "./style";
import ButtonFavorites from "../../Atomos/ButtonFavorites";
import { PetProps } from "./../../../types/DecodedProps";

interface CardPetProps {
  item: PetProps
}

const CardPet = ({item} : CardPetProps) => {
  const handleClick = () => {
    console.log("Go to PetInfo brooooowwwwww S2")
  }

  return (
    <Card img ={item.img} onClick={handleClick}>
      <ButtonContainer>
        <ButtonFavorites />
      </ButtonContainer>
      <CardInfo>
        <CardDescription>
          <h1>{item.name}</h1>
          <div>
            <h2>Raca</h2>
            <h2>{item.breed}</h2>
          </div>
          <div>
            <h2>Genero</h2>
            <h2>{item.gender}</h2>
          </div>
          <div>
            <h2>Idade</h2>
            <h2>{item.age}</h2>
          </div>
        </CardDescription>
      </CardInfo>
    </Card>
  );
};
export default CardPet;
