import { Container, FakeBackground } from "./styles";
import Form from "../../components/Molecules/Form";
import Input from "../../components/Atomos/Input";
import Api from "../../services/api";
import {toast} from "react-toastify";
import * as yup from "yup";
import api from "../../services/api";
import LargeButton from "./../../components/Atomos/LargeButton";

interface SingUpProps {
  fullName: string,
  email: string,
  password: string,
  age: string,
  passwordConfirmation: string,
  district: string,
  city: string,
  state: string,
  img: string,
  contact: string
}

const schema = yup.object().shape({
  fullName: yup.string().required().min(3).max(50),
  email: yup.string().required().min(5).max(50),
  password: yup.string().required().min(6).max(50),
  passwordConfirmation: yup.string().required()
  .oneOf([yup.ref('password'), null], 'Passwords must match'),
  age: yup.number().positive().integer().required(),
  district: yup.string().required().min(2).max(50),
  city: yup.string().required().min(2).max(50),
  state: yup.string().required().min(2).max(50),
  img: yup.string(),
  contact: yup.string().required()
});

const SignUp = () => {
  const onSubmit = (data : SingUpProps, reset : any) => {
    const newData = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
      age: data.age,
      contact: data.contact,
      info: {
        district: data.district,
        state: data.state,
        city: data.city
      }
    }
    api.post("register", newData)
      .then(response => {
        toast.success("Sua conta foi criada com sucesso")
        reset();
      })
      .catch(err => {
        toast.info(err.response.data)
      })
  }

  return (
    <Container>
      <FakeBackground>
        <p>Sign Up</p>
        <Form onSubmit={onSubmit} schema={schema}>
          <Input name="fullName" label="Nome Completo" placeholder="Preencher"/>
          <Input name="email" label="Email" placeholder="Preencher"/>
          <Input name="password" autoComplete="true" label="Senha"  placeholder="Preencher" type="password"/>
          <Input name="passwordConfirmation" autoComplete="true" label="Confirmar Senha" placeholder="Preencher" type="password"/>
          <Input name="age" label="Idade" type="number" placeholder="Preencher"/>
          <Input name="state" label="Estado" placeholder="Preencher"/>
          <Input name="city" label="Cidade" placeholder="Preencher"/>
          <Input name="district" label="Bairro" placeholder="Preencher"/>
          <Input name="contact" label="Contato" placeholder="Number"/>
          <Input name="img" label="Imagem de Perfil" placeholder="Url Imagem" />
          <LargeButton type="submit">Enviar</LargeButton>
        </Form>
      </FakeBackground>
    </Container>
  );
};

export default SignUp;
