import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { PetInfoDiv, UserDiv, PetInfoCardDiv, Container } from "./style";
import PetInfoCard from "../../components/Molecules/PetInfoCard";
import { PetProps } from "../../types/DecodedProps";
import { MdPlace, MdEmail } from "react-icons/md";
import { GiSmartphone } from "react-icons/gi";

interface ParamProps {
  petId: string;
}

const PetInfo = () => {
  const { petId }: ParamProps = useParams();
  const [pet, setPet] = useState<PetProps>(Object);

  useEffect(() => {
    api
      .get(`pets?id=${petId}`)
      .then((pet: any) => setPet(pet.data[0]))
      .catch((err) => console.error(err));
  }, [petId]);

  return (
    <Container>
      <PetInfoDiv>
        <PetInfoCardDiv>
          <PetInfoCard pet={pet}></PetInfoCard>
        </PetInfoCardDiv>
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
      </PetInfoDiv>
    </Container>
  );
};

export default PetInfo;
