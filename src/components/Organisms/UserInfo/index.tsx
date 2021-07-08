import { InfoDiv, UserInfoDiv, InfoImageDiv } from "./style";
import Perfil from "../../../assets/perfil.png";
import { useState } from "react";
import { useEffect } from "react";
import api from "../../../services/api";
import { User } from "../../../types/User";

interface userInfoProps {
  userId: string;
}

const UserInfo = ({ userId }: userInfoProps) => {
  const [user, setUser] = useState<any>({});
  const [token] = useState(localStorage.getItem("token"));

  useEffect(() => {
    api
      .get(`users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((user: any) => setUser(user))
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
        <p>Estado:{user.info.state}</p>
        <p>Cidade:{user.info.street}</p>
        <p>Bairro:{user.info.district}</p>
      </InfoDiv>
    </UserInfoDiv>
  );
};

export default UserInfo;
