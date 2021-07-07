import { LoginDiv, Xdiv, BackgroundModal } from "./style";
import x from "../../../assets/x.png";
import { Dispatch, SetStateAction } from "react";

interface LoginModalProps {
  modalOpened: boolean;
  setModalOpened: Dispatch<SetStateAction<boolean>>;
}

const LoginModal = ({ modalOpened, setModalOpened }: LoginModalProps) => {
  return (
    <BackgroundModal isOpened={modalOpened}>
      <LoginDiv>
        <h3>Log In</h3>
        <Xdiv onClick={() => setModalOpened(false)}>
          <img src={x} />
        </Xdiv>
      </LoginDiv>
    </BackgroundModal>
  );
};

export default LoginModal;
