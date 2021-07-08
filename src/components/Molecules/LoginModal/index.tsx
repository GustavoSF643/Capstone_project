import { LoginDiv, Xdiv, BackgroundModal, LoginFormDiv } from "./style";
import x from "../../../assets/x.png";
import { Dispatch, SetStateAction } from "react";
import Input from "../../Atomos/Input";
import Form from "../Form";
import LargeButton from "../../Atomos/LargeButton";
import * as yup from "yup";
import api from "../../../services/api";
import { toast } from "react-toastify";

interface LoginModalProps {
  modalOpened: boolean;
  setModalOpened: Dispatch<SetStateAction<boolean>>;
}

interface LoginProps {
  email: string;
  password: string;
}

const LoginModal = ({ modalOpened, setModalOpened }: LoginModalProps) => {
  const schema = yup.object().shape({
    email: yup.string().required("Campo Obrigatório!").min(5).max(50),
    password: yup.string().required("Campo Obrigatório!").min(6).max(50),
  });

  const onSubmit = (data: LoginProps, reset: any) => {
    api
      .post("login", data)
      .then((response) => {
        localStorage.setItem(
          "@petMacher:token",
          JSON.stringify(response.data.accessToken)
        );
        reset();
        location.reload();
      })
      .catch((err) => {
        toast.info(err.response.data);
      });
  };

  return (
    <BackgroundModal
      isOpened={modalOpened}
      onClick={() => setModalOpened(false)}
    >
      <LoginDiv onClick={(e) => e.stopPropagation()}>
        <h3>Log In</h3>
        <Xdiv onClick={() => setModalOpened(false)}>
          <img src={x} />
        </Xdiv>
        <LoginFormDiv>
          <Form onSubmit={onSubmit} schema={schema}>
            <Input name="email" label="Email" placeholder="Preencher" />
            <Input
              name="password"
              label="Senha"
              placeholder="Preencher"
              type="password"
            />
            <LargeButton label="LOGIN" />
          </Form>
        </LoginFormDiv>
      </LoginDiv>
    </BackgroundModal>
  );
};

export default LoginModal;
