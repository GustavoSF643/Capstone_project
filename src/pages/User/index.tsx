import { useState, useEffect } from "react";
import { Redirect } from "react-router";
import UserInfo from "../../components/Organisms/UserInfo";
import { UserDiv, UserMenuDiv } from "./style";
import jwt_decode from "jwt-decode";
import { DecodedProps } from "../../types/DecodedProps";

const User = () => {
  const [userId, setUserId] = useState<string>("");
  const [token] = useState<string | null>(
    JSON.stringify(localStorage.getItem("@petMacher:token") || null)
  );
  const [infoOpened, setInfoOpened] = useState(true);
  const [favoritesOpened, setFavoritesOpened] = useState(false);
  const [petsOpened, setPetsOpened] = useState(false);

  useEffect(() => {
    if (token) {
      const decode: DecodedProps = jwt_decode(token);
      setUserId(decode.sub);
    }
  }, []);

  const changeMenu = (name: string) => {
    if (name === "info") {
      setInfoOpened(true);
    } else {
      setInfoOpened(false);
    }
    if (name === "favorites") {
      setFavoritesOpened(true);
    } else {
      setFavoritesOpened(false);
    }
    if (name === "pets") {
      setPetsOpened(true);
    } else {
      setPetsOpened(false);
    }
  };

  if (!token) {
    return <Redirect to="/register" />;
  }

  return (
    <UserDiv>
      <h3>Perfil</h3>
      <UserMenuDiv
        infoOpened={infoOpened}
        favoritesOpened={favoritesOpened}
        petsOpened={petsOpened}
      >
        <button onClick={() => changeMenu("info")}>Informações</button>
        <button onClick={() => changeMenu("favorites")}>Favoritos</button>
        <button onClick={() => changeMenu("pets")}>Seus Pets</button>
      </UserMenuDiv>
      {infoOpened && userId && <UserInfo userId={userId}></UserInfo>}
      {favoritesOpened && <div>Favoritos</div>}
      {petsOpened && <div>Seus Pets</div>}
    </UserDiv>
  );
};

export default User;
