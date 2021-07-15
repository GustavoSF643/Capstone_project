import { useState } from "react";
import { useEffect } from "react";
import api from "../../../services/api";
import { PetProps } from "../../../types/DecodedProps";
import CardPet from "../../Molecules/CardPet";
import { UserPetsDiv, NotPetsDiv } from "./style";

interface UserPetsProps {
  userId: string;
}

const UserPets = ({ userId }: UserPetsProps) => {
  const [userPets, setUserPets] = useState<PetProps[]>([]);

  useEffect(() => {
    api
      .get(`pets?userId=${userId}`)
      .then((pets: any) => {
        setUserPets(pets.data);
      })
      .catch((error) => console.error(error));
  }, [userId]);

  return (
    <UserPetsDiv>
      {userPets &&
        userPets.map((pet) => (
          <CardPet
            key={pet.id}
            img={pet.img}
            name={pet.name}
            breed={pet.breed}
            gender={pet.gender}
            age={pet.age}
            id={pet.id}
          />
        ))}
      {userPets && userPets.length === 0 && (
        <NotPetsDiv>
          <h3>Vocẽ não possui nenhum pet para adoção.</h3>
        </NotPetsDiv>
      )}
    </UserPetsDiv>
  );
};

export default UserPets;
