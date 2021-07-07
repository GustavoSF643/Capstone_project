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
  const onSubmit = (data : SingUpProps, reset : any) => {
    console.log(data)
    reset();
  }

  return (
    <Container>
      <FakeBackground>
        <p>Sign Up</p>
        <Form onSubmit={onSubmit} schema={schema}>
          <Input name="fullName" label="Nome Completo" placeholder="Preencher"/>
          <Input name="email" label="Email" placeholder="Preencher"/>
          <Input name="password" label="Senha" placeholder="Preencher"/>
          <Input name="passwordConfirmation" label="Confirmar Senha" placeholder="Preencher"/>
          <Input name="age" label="Idade" type="number" placeholder="Preencher"/>
          <Input name="district" label="Bairro" placeholder="Preencher"/>
          <Input name="city" label="Cidade" placeholder="Preencher"/>
          <Input name="state" label="Estado" placeholder="Preencher"/>

          <button type="submit">Enviar</button>
        </Form>
      </FakeBackground>
    </Container>
  );
};

export default SignUp;
