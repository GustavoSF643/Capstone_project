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
import { useEffect, useState } from "react";
import LoginModal from "../../Molecules/LoginModal";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import api from "../../../services/api";
import { DecodedProps } from "../../../types/DecodedProps";

const Header = () => {
  const [userMenuOpened, setUsermenuOpened] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const [token] = useState(localStorage.getItem("@petMacher:token") || null);
  const [userName, setUserName] = useState<string>("");
  const [userImg, setUserImg] = useState<string>("");

  const history = useHistory();

  useEffect(() => {
    if (token) {
      const decode: DecodedProps = jwt_decode(token);

      api
        .get(`users/${decode.sub}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((user: any) => {
          const nameArray = user.data.fullName.split(" ");

          const firstName = nameArray[0];
          setUserName(firstName);
          setUserImg(user.data.img);
        })
        .catch((err) => console.error(err));
    }
  }, [token]);

  return (
    <HeaderDiv>
      <LogoDiv onClick={() => history.push("/")}>
        <img src={LogoHeader} />
      </LogoDiv>
      <MenuHeader />
      {userMenuOpened && (
        <UserMenuDiv>
          {userName && <UserMenu />}
        </UserMenuDiv>
      )}
      {token ? (
        <UserImgDiv onClick={() => setUsermenuOpened(!userMenuOpened)}>
          {userImg && <img src={userImg} />}
        </UserImgDiv>
      ) : (
        <>
          <LoginModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
          <RegisterDiv>
            <RegisterButton onClick={() => history.push("/signup")}>
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
