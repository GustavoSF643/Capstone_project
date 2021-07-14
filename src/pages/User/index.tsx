import { useState, useEffect } from "react";
import { Redirect } from "react-router";
import UserInfo from "../../components/Organisms/UserInfo";
import { UserDiv, UserMenuDiv } from "./style";
import jwt_decode from "jwt-decode";
import { DecodedProps } from "../../types/DecodedProps";
import { useHistory } from "react-router-dom";
import UserFavorites from "../../components/Organisms/UserFavorites";
import UserPets from "../../components/Organisms/UserPets";
import { useUserInfo } from "./../../Providers/UserInfo";

interface StateProps {
  message: string;
}

interface LocationProps {
  state: StateProps;
}

interface HistoryProps {
  location: LocationProps;
}

const User = () => {
  const { isLogin, decode } = useUserInfo();
  const history: HistoryProps = useHistory();
  const {
    location: {
      state: { message },
    },
  } = history;

  const [infoOpened, setInfoOpened] = useState<boolean>(() => {
    return message === "info" ? true : false;
  });
  const [favoritesOpened, setFavoritesOpened] = useState<boolean>(() => {
    return message === "favorites" ? true : false;
  });
  const [petsOpened, setPetsOpened] = useState<boolean>(() => {
    return message === "pets" ? true : false;
  });

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

  if (!isLogin) {
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
      {infoOpened && decode && <UserInfo userId={decode}></UserInfo>}
      {favoritesOpened && <UserFavorites />}
      {petsOpened && <UserPets userId={decode} />}
    </UserDiv>
  );
};

export default User;
