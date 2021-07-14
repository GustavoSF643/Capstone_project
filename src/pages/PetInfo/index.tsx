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
import { DecodedProps, PetProps } from "../../types/DecodedProps";
import { MdPlace, MdEmail } from "react-icons/md";
import { GiSmartphone } from "react-icons/gi";
import jwt_decode from "jwt-decode";
import InterestedPeopleCard from "../../components/Molecules/InterestedPeopleCard";

interface ParamProps {
  petId: string;
}

const PetInfo = () => {
  const { petId }: ParamProps = useParams();
  const [pet, setPet] = useState<PetProps>(Object);
  const [token] = useState<string | null>(
    JSON.stringify(localStorage.getItem("@petMacher:token") || null)
  );
  const [owner, setOwner] = useState<boolean>(false);

  useEffect(() => {
    api
      .get(`pets?id=${petId}`)
      .then((pet: any) => setPet(pet.data[0]))
      .catch((err) => console.error(err));
  }, [petId]);

  useEffect(() => {
    if (token) {
      const decode: DecodedProps = jwt_decode(token);
      if (parseInt(decode.sub) === pet.userId) {
        setOwner(true);
      }
    }
  }, [pet, token]);

  return (
    <Container>
      <PetInfoDiv>
        <PetInfoCardDiv>
          <PetInfoCard pet={pet}></PetInfoCard>
        </PetInfoCardDiv>
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
              {pet.interestedPeople &&
                pet.interestedPeople.map((people) => (
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
