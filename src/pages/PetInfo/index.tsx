import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { PetInfoDiv } from "./style";

interface ParamProps {
  petId: string;
}

const PetInfo = () => {
  const { petId }: ParamProps = useParams();
  const [pet, setPet] = useState();

  useEffect(() => {
    api
      .get(`pets?id=${petId}`)
      .then((pet: any) => setPet(pet))
      .catch((err) => console.error(err));
  }, []);

  return <PetInfoDiv></PetInfoDiv>;
};

export default PetInfo;
