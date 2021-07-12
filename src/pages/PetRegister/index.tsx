import { Container, FakeBackground, H2 } from "./styles";
import Form from "./../../components/Molecules/Form";
import Input from "./../../components/Atomos/Input";
import SelectForm from "./../../components/Atomos/SelectForm";
import LargeButton from "./../../components/Atomos/LargeButton";
import TextArea from "./../../components/Atomos/Textarea";
import * as yup from "yup";

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

interface OnsubmitProps {
  
}

const PetRegister = () => {
  const onSubmit = (data : any) => {
    console.log(data)
    // "currentState": 0,
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