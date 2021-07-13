import {
  Container,
  ContainerCards,
  PetsIcon,
  RestForm,
  FormStyles,
  AloneInput,
} from "./styles";
import Dog from "./../../assets/Dog.png";
import Cat from "./../../assets/Cat.png";
import Select from "./../../components/Atomos/Select";
import LargeButton from "./../../components/Atomos/LargeButton";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "./../../services/api";
import { useEffect, useState } from "react";
import CardPet from "./../../components/Molecules/CardPet";
import { PetProps } from "./../../types/DecodedProps";

interface IFormInputs {
  type: string;
  state: string;
  gender: string;
  size: string;
  city: string;
}

const schema = yup.object().shape({
  type: yup.string(),
  state: yup.string(),
  gender: yup.string(),
  size: yup.string(),
  city: yup.string(),
});

const Dashboard = () => {
  const [pets, setPets] = useState<PetProps[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const firstLoad = () => {
    api
      .get(`pets`)
      .then((response) => setPets(response.data))
      .catch((err) => console.log(err, err.response));
  };

  useEffect(() => {
    firstLoad();
  }, []);

  const onSubmit = (data: IFormInputs) => {
    let str = "";
    let count = true;
    for (let [key, value] of Object.entries(data)) {
      if (value !== "Selecionar" && value !== "") {
        count ? (str += `?`) : (str += `&`);
        count = false;

        if (key === "state") {
          str += `userInfo.${key}=${value}`;
        } else {
          str += `${key}=${value}`;
        }
      }
    }

    api
      .get(`pets/${str}`)
      .then((response) => {
        setPets(response.data);
        reset();
      })
      .catch((err) => console.log(err, err.response));
  };

  return (
    <Container>
      <FormStyles onSubmit={handleSubmit(onSubmit)}>
        <PetsIcon>
          <label>
            <input
              defaultChecked
              {...register("type")}
              type="radio"
              value="Selecionar"
            />
          </label>

          <label>
            <input {...register("type")} type="radio" value="Dog" />
            <img src={Dog} />
          </label>

          <label>
            <input {...register("type")} type="radio" value="Cat" />
            <img src={Cat} />
          </label>
        </PetsIcon>

        <RestForm>
          <Select
            name="state"
            register={register}
            label="Estado"
            options={["Selecionar", "Paraná", "Sc", "Am", "Es"]}
          />
          <AloneInput {...register("city")} placeholder="Cidade" />

          <Select
            name="gender"
            register={register}
            label="Gênero"
            options={["Selecionar", "Female", "Male"]}
          />
          <Select
            name="size"
            label="Tamanho"
            register={register}
            options={["Selecionar", "Small", "Medium", "Big"]}
          />

          <LargeButton type="submit">Buscar</LargeButton>
        </RestForm>
      </FormStyles>

      <ContainerCards>
        {pets.map((pet) => (
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
      </ContainerCards>
    </Container>
  );
};

export default Dashboard;
