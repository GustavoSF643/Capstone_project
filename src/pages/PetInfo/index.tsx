import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { PetInfoDiv } from "./style";
import PetInfoCard from "../../components/Molecules/PetInfoCard";
import { PetProps } from "../../types/DecodedProps";

interface ParamProps {
  petId: string;
}

const PetInfo = () => {
  const { petId }: ParamProps = useParams();
  const [pet, setPet] = useState<PetProps>(Object);

  useEffect(() => {
    api
      .get(`pets?id=${petId}`)
      .then((pet: any) => setPet(pet))
      .catch((err) => console.error(err));
  }, []);

  return (
    <PetInfoDiv>
      <PetInfoCard pet={pet}></PetInfoCard>
    </PetInfoDiv>
  );
};

export default PetInfo;
