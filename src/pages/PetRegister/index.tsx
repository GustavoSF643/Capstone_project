import { Container, FakeBackground, H2 } from "./styles";
import Form from "./../../components/Molecules/Form";
import Input from "./../../components/Atomos/Input";
import SelectForm from "./../../components/Atomos/SelectForm";
import LargeButton from "./../../components/Atomos/LargeButton";
import TextArea from "./../../components/Atomos/Textarea";
import { useUserInfo } from "./../../Providers/UserInfo";
import * as yup from "yup";
import api from "./../../services/api";
import { toast } from "react-toastify";
import axios from "axios";
import { Redirect } from "react-router-dom";

const schema = yup.object().shape({
  name: yup.string().required(),
  type: yup.string().required(),
  gender: yup.string().required(),
  behavior: yup.string().required(),
  size: yup.string().required(),
  breed: yup.string().required(),
  age: yup.number().positive().integer().required(),
  color: yup.string().required(),
  coat: yup.string().required(),
  description: yup.string().required(),
  health: yup.string().required(),
  img: yup.string(),
  history: yup.string().required()
})

interface DataProps {
  name: string,
  type: string,
  breed: string,
  gender: string,
  age: number,
  size: string,
  color: string,
  coat: string,
  health: string,
  img: string,
  description: string,
  behavior: string,
  history: string
}

const PetRegister = () => {
  const { tokenParse, user, decode, isLogin } = useUserInfo();

  const apiCall = (data: DataProps, reset: any, imgPet: string) => {
    const newData = {
      name: data.name,
      type: data.type,
      breed: data.breed,
      gender: data.gender,
      age: data.age,
      size: data.size,
      color: data.color,
      coat: data.coat,
      health: data.health,
      currentState: 0,
      img: imgPet,
      about: {
        description: data.description,
        behavior: data.behavior,
        history: data.history
      },
      userInfo: {
        fullName: user.fullName,
        state: user.info.state,
        city: user.info.city,
        img: user.img,
        contact: user.contact,
        email: user.email
      },
      interestedPeople: [
        
      ],
      userId: Number(decode)
    }
      api.post("pets", newData, {
        headers: {
          Authorization: `Bearer ${tokenParse}`,
        },
      })
        .then(response => {
          toast.success("Sucess");
          reset();
        })
        .catch(err => console.log(err, err.response))
  }

  async function randomPet(url: string, data: DataProps, reset:any, type: string) {
    const response = await axios.get(url);
    let petImg = "";

    if (type === "cat") {
      petImg = response.data[0].url;
    } else {
      petImg = response.data.message
    }
    apiCall(data, reset, petImg);
  }

  const onSubmit = (data: DataProps, reset: any) => {
    if(data.img.length < 15 && data.type === "Gato") {
      randomPet("https://api.thecatapi.com/v1/images/search", data, reset, "cat");
    } else if (data.img.length < 15 && data.type === "Cachorro") {
      randomPet("https://dog.ceo/api/breeds/image/random", data, reset, "dog");
    } else {
      apiCall(data, reset, data.img);
    }
  }

  if(!isLogin) {
    return <Redirect to="/signup" />
  }

  return (
    <Container>
      <FakeBackground>
        <p>Registrar Pet</p>

        <Form schema={schema} onSubmit={onSubmit}>
          <Input name="name" label="Nome" placeholder="Preencher"/>
          <SelectForm name="type" label="Tipo" options={["Selecionar", "Gato", "Cachorro"]}/>
          <SelectForm name="gender" label="Gênero" options={["Selecionar", "Male", "Female"]}/>
          <SelectForm name="behavior" label="Temperamento" options={["Selecionar", "Agitado", "Atencioso", "Creativo", "Lógico", "Organizado", "Bagunceiro", "Preciso", "Anxioso", "Sério", "Impaciente", "Rígido", "Agressivo"]}/>
          <SelectForm name="size" label="Porte" options={["Selecionar", "Pequeno", "Médio", "Grande"]}/>
          <Input name="breed" label="Raça" placeholder="Preencher"/>
          <Input type="number" name="age" label="Idade" placeholder="Preencher"/>
          <Input name="color" label="Cor" placeholder="Preencher"/>
          <Input name="coat" label="Pelagem" placeholder="Preencher"/>
          <H2>Sobre</H2>
          
          <TextArea name="description" label="Descrição" placeholder="Preencher"/>
          <Input name="health" label="Saúde" placeholder="Preencher"/>
          <TextArea name="history" label="História" placeholder="Preencher"/>
          <Input name="img" label="Imagem" placeholder="Url do animal"/>
          <LargeButton type="submit">Criar</LargeButton>
        </Form>
      </FakeBackground>
    </Container>
  );
};
  
export default PetRegister;