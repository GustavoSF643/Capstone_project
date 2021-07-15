import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import {
  PetInfoDiv,
  UserDiv,
  PetInfoCardDiv,
  Container,
  InterestedPeopleDiv,
  ContainerPeoples,
} from "./style";
import PetInfoCard from "../../components/Molecules/PetInfoCard";
import { PetProps } from "../../types/DecodedProps";
import { MdPlace, MdEmail } from "react-icons/md";
import { GiSmartphone } from "react-icons/gi";
import InterestedPeopleCard from "../../components/Molecules/InterestedPeopleCard";
import { ProviderProps } from "../../types/ProviderProps";
import { useUserInfo } from "../../Providers/UserInfo";
import { AxiosResponse } from "axios";

interface ParamProps {
  petId: string;
}

const PetInfo = () => {
  const { petId }: ParamProps = useParams();
  const [pet, setPet] = useState<PetProps>(Object);
  const [ownerId, setOwnerId] = useState<number>();
  const [owner, setOwner] = useState<boolean>(false);

  const {
    user: { id },
  }: ProviderProps = useUserInfo();

  const getPet = () => {
    api
      .get(`pets?id=${petId}`)
      .then((pet: AxiosResponse) => {
        setPet(pet.data[0]);
        setOwnerId(pet.data[0].userId);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (petId) {
      getPet();
    }
    if (ownerId && id) {
      if (ownerId === id) {
        setOwner(true);
      }
    }
  }, [petId, ownerId, id]);

  return (
    <Container>
      <PetInfoDiv>
        {pet && (
          <PetInfoCardDiv>
            <PetInfoCard pet={pet} getPet={getPet}></PetInfoCard>
          </PetInfoCardDiv>
        )}
        <ContainerPeoples>
          {pet.userInfo && (
            <UserDiv>
              <img src={pet.userInfo.img} />
              <h2>{pet.userInfo.fullName}</h2>
              <p>
                <MdPlace />
                {pet.userInfo.city},{pet.userInfo.state}
              </p>

              <p>
                <MdEmail />
                {pet.userInfo.contact}
              </p>

              <p>
                <GiSmartphone />
                {pet.userInfo.email}
              </p>
            </UserDiv>
          )}

          {owner && (
            <InterestedPeopleDiv>
              <h3>Pessoas Interessadas</h3>
              {pet.interestedPeople.map((people) => (
                <InterestedPeopleCard people={people} key={people.id} />
              ))}
            </InterestedPeopleDiv>
          )}
        </ContainerPeoples>
      </PetInfoDiv>
    </Container>
  );
};

export default PetInfo;
