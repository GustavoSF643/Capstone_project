import {
  Container,
  TextContainer,
  Attributes,
  History,
  About,
  ImageContainer,
  ButtonContainer,
} from "./styles";
import LargeButton from "../../Atomos/LargeButton";
import ButtonFavorites from "../../Atomos/ButtonFavorites";
import { PetProps } from "../../../types/DecodedProps";

interface PetInfoCardProps {
  pet: PetProps;
}

const PetInfoCard = ({ pet }: PetInfoCardProps) => {
  return (
    <>
      <Container>
        <ImageContainer>
          <img src={pet.img}></img>
          <ButtonContainer>
            <ButtonFavorites />
          </ButtonContainer>
        </ImageContainer>

        <TextContainer>
          <div>
            <h1>{pet.name}</h1>
            <p>
              {pet.userInfo && pet.userInfo.city},{" "}
              {pet.userInfo && pet.userInfo.state}
            </p>
            <p>bairro</p>
          </div>
          <hr />
          <Attributes>
            <label>{pet.breed}</label>&bull;
            <label>{pet.age} anos</label>&bull;
            <label>{pet.gender}</label>&bull;
            <label>{pet.size}</label>&bull;
            <label>{pet.color}</label>&bull;
            <label>{pet.coat}</label>
          </Attributes>
          <hr />
          <About>
            <h2>Sobre</h2>
            <h6>CARACTERISTICAS</h6>
            <p>{pet.about && pet.about.description}</p>
            <h6>SAUDE</h6>
            <p>{pet.health}</p>
            <h6>COMPORTAMENTO</h6>
            <p>{pet.about && pet.about.behavior}</p>
          </About>
          <hr />
          <History>
            <h2>Historia</h2>
            <p>{pet.about && pet.about.history}</p>
          </History>
          <hr />
        </TextContainer>
        <LargeButton>Estou interessado</LargeButton>
      </Container>
    </>
  );
};

export default PetInfoCard;
