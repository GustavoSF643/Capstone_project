import MenuHeader from "../../Molecules/MenuHeader";
import UserMenu from "../../Molecules/UserMenu";
import {
  HeaderDiv,
  LogoDiv,
  UserImgDiv,
  UserMenuDiv,
  RegisterButton,
  RegisterDiv,
} from "./style";
import LogoHeader from "../../../assets/LogoHeader.png";
import Vector from "../../../assets/Vector.png";
import { useState } from "react";
import LoginModal from "../../Molecules/LoginModal";
import { useHistory } from "react-router-dom";

const Header = () => {
  const [userMenuOpened, setUsermenuOpened] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const [token] = useState(localStorage.getItem("token") || null);

  const history = useHistory();

  return (
    <HeaderDiv>
      <LogoDiv onClick={() => history.push("/")}>
        <img src={LogoHeader} />
      </LogoDiv>
      <MenuHeader />
      {userMenuOpened && (
        <UserMenuDiv>
          <UserMenu />
        </UserMenuDiv>
      )}
      {token ? (
        <UserImgDiv onClick={() => setUsermenuOpened(!userMenuOpened)}>
          <img src={Vector} />
        </UserImgDiv>
      ) : (
        <>
          <LoginModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
          <RegisterDiv>
            <RegisterButton onClick={() => history.push("/register")}>
              REGISTRAR
            </RegisterButton>
            <a onClick={() => setModalOpened(true)}>LOGIN</a>
          </RegisterDiv>
        </>
      )}
    </HeaderDiv>
  );
};

export default Header;
