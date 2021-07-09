import { InfoDiv, UserInfoDiv, InfoImageDiv, ButtonDiv } from "./style";
import Perfil from "../../../assets/perfil.png";
import { useState } from "react";
import { useEffect } from "react";
import api from "../../../services/api";
import { User } from "../../../types/User";
import LargeButton from "../../Atomos/LargeButton";

interface userInfoProps {
  userId: string;
}

const UserInfo = ({ userId }: userInfoProps) => {
  const [user, setUser] = useState<User>(Object);

  useEffect(() => {
    const token = localStorage.getItem("@petMacher:token");

    api
      .get(`users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((user: any) => setUser(user.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <UserInfoDiv>
      <InfoImageDiv>
        <img src={Perfil} />
      </InfoImageDiv>
      <InfoDiv>
        <h3>{user.name}</h3>
        <p>Email:{user.email}</p>
        <p>Telefone:{user.phone}</p>
        <p>Idade:{user.age}</p>
        <p>Estado:{user.info && user.info.state}</p>
        <p>Cidade:{user.info && user.info.city}</p>
        <p>Bairro:{user.info && user.info.district}</p>
      </InfoDiv>
      <ButtonDiv>
        <LargeButton label="EDITAR" />
      </ButtonDiv>
    </UserInfoDiv>
  );
};

export default UserInfo;
