import { useState, useEffect } from "react";
import { Redirect } from "react-router";
import UserInfo from "../../components/Organisms/UserInfo";
import { UserDiv, UserMenuDiv } from "./style";
import jwt_decode from "jwt-decode";
import { DecodedProps } from "../../types/DecodedProps";
import { useHistory } from "react-router-dom";
import UserFavorites from "../../components/Organisms/UserFavorites";
import UserPets from "../../components/Organisms/UserPets";

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
  const history: HistoryProps = useHistory();
  const {
    location: {
      state: { message },
    },
  } = history;

  const [userId, setUserId] = useState<string>("");
  const [token] = useState<string | null>(
    JSON.stringify(localStorage.getItem("@petMacher:token") || null)
  );
  const [infoOpened, setInfoOpened] = useState<boolean>(() => {
    return message === "info" ? true : false;
  });
  const [favoritesOpened, setFavoritesOpened] = useState<boolean>(() => {
    return message === "favorites" ? true : false;
  });
  const [petsOpened, setPetsOpened] = useState<boolean>(() => {
    return message === "pets" ? true : false;
  });

  useEffect(() => {
    if (token) {
      const decode: DecodedProps = jwt_decode(token);
      setUserId(decode.sub);
    }
  }, [token]);

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
      {favoritesOpened && <UserFavorites />}
      {petsOpened && <UserPets userId={userId} />}
    </UserDiv>
  );
};

export default User;
