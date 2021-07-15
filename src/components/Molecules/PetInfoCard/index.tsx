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
import { useState } from "react";
import { ProviderProps } from "../../../types/ProviderProps";
import { useUserInfo } from "../../../Providers/UserInfo";
import { useEffect } from "react";
import api from "../../../services/api";

interface PetInfoCardProps {
  pet: PetProps;
  getPet: () => void;
}

const PetInfoCard = ({ pet, getPet }: PetInfoCardProps) => {
  const {
    user: { id, info, img, contact, email },
    isLogin,
    tokenParse,
  }: ProviderProps = useUserInfo();

  const [isInterested, setIsInterested] = useState(false);

  const { interestedPeople } = pet;

  useEffect(() => {
    if (interestedPeople && pet) {
      setIsInterested(pet.interestedPeople.some((people) => id === people.id));
    }
  }, [interestedPeople, pet]);

  const handleInterested = () => {
    const newData = {
      state: info.state,
      city: info.city,
      district: info.district,
      img: img,
      contact: contact,
      email: email,
      id: id,
    };

    const interestedPeopleArray = interestedPeople ? interestedPeople : [];
    const newInterestedPeople = [...interestedPeopleArray, newData];

    api
      .patch(
        `pets/${pet.id}`,
        { interestedPeople: newInterestedPeople },
        {
          headers: {
            Authorization: `Bearer ${tokenParse}`,
          },
        }
      )
      .then((response) => getPet())
      .catch((error) => console.error(error));
  };

  const handleNotInterested = () => {
    const interestedPeopleArray = interestedPeople ? interestedPeople : [];
    const filtredPeople = interestedPeopleArray.filter(
      (people) => people.id !== id
    );

    api
      .patch(
        `pets/${pet.id}`,
        { interestedPeople: filtredPeople },
        {
          headers: {
            Authorization: `Bearer ${tokenParse}`,
          },
        }
      )
      .then((response) => getPet())
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Container>
        <ImageContainer>
          <img src={pet.img}></img>
          {isLogin && pet && (
            <ButtonContainer>
              <ButtonFavorites
                pet={{
                  img: pet.img,
                  name: pet.name,
                  breed: pet.breed,
                  gender: pet.gender,
                  age: pet.age,
                  id: pet.id,
                }}
              />
            </ButtonContainer>
          )}
        </ImageContainer>

        <TextContainer>
          <div>
            <h1>{pet.name}</h1>
            <p>
              {pet.userInfo && pet.userInfo.city},
              {pet.userInfo && pet.userInfo.state}
            </p>
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
        {isInterested ? (
          <LargeButton onClick={() => handleNotInterested()}>
            Não estou interessado
          </LargeButton>
        ) : (
          <LargeButton onClick={() => handleInterested()}>
            Estou interessado
          </LargeButton>
        )}
      </Container>
    </>
  );
};

export default PetInfoCard;
