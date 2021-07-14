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
import api from "../../../services/api";
import { AxiosResponse } from "axios";
import { useUserInfo } from "../../../Providers/UserInfo";
import { ProviderProps } from "../../../types/ProviderProps";

const Header = () => {
  const [userMenuOpened, setUsermenuOpened] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const [userImg, setUserImg] = useState<string>("");

  const history = useHistory();

  const {
    user: { id },
    tokenParse,
    isLogin,
  }: ProviderProps = useUserInfo();

  useEffect(() => {
    if (tokenParse && id) {
      api
        .get(`users/${id}`, {
          headers: {
            Authorization: `Bearer ${tokenParse}`,
          },
        })
        .then((user: AxiosResponse) => {
          setUserImg(user.data.img);
        })
        .catch((err) => console.error(err));
    }
  }, [tokenParse, id]);

  return (
    <HeaderDiv>
      <LogoDiv onClick={() => history.push("/")}>
        <img src={LogoHeader} />
      </LogoDiv>
      <MenuHeader />
      {userMenuOpened && <UserMenuDiv>{<UserMenu />}</UserMenuDiv>}
      {isLogin ? (
        <UserImgDiv onClick={() => setUsermenuOpened(!userMenuOpened)}>
          {userImg ? <img src={userImg} /> : <img src={Vector} />}
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
