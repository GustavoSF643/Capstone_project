import { Container, FakeBackground } from "./styles";
import Form from "../../components/Molecules/Form";
import Input from "../../components/Atomos/Input";
import Api from "../../services/api";

import * as yup from "yup";

interface SingUpProps {
  fullName: string,
  email: string,
  password: string,
  age: string,
  passwordConfirmation: string,
  district: string,
  city: string,
  state: string
}

const schema = yup.object().shape({
  fullName: yup.string().required().min(3).max(50),
  email: yup.string().required().min(5).max(50),
  password: yup.string().required().min(6).max(50),
  passwordConfirmation: yup.string()
     .oneOf([yup.ref('password'), null], 'Passwords must match'),
  age: yup.number().positive().integer().required(),
  district: yup.string().required().min(2).max(50),
  city: yup.string().required().min(2).max(50),
  state: yup.string().required().min(2).max(50),
});

const SignUp = () => {
  const onSubmit = (data : SingUpProps) => {
    console.log(data)
  }

  return (
    <Container>
      <FakeBackground>
        <p>Sign Up</p>
        <Form onSubmit={onSubmit} schema={schema}>
          <Input name="fullName" label="Nome Completo"/>
          <Input name="email" label="Email"/>
          <Input name="password" label="Senha"/>
          <Input name="passwordConfirmation" label="Confirmar Senha"/>
          <Input name="age" label="Idade" type="number"/>
          <Input name="district" label="Bairro" />
          <Input name="city" label="Cidade" />
          <Input name="state" label="Estado" />

          <button type="submit">Enviar</button>
        </Form>
      </FakeBackground>
    </Container>
  );
};

export default SignUp;
