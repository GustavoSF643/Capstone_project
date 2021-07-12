import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { DecodedProps } from "../../../types/DecodedProps";
import { UserMenuDiv } from "./style";
import jwt_decode from "jwt-decode";
import api from "../../../services/api";

const UserMenu = () => {
  const history = useHistory();
  const [token] = useState<string | null>(
    JSON.stringify(localStorage.getItem("@petMacher:token") || null)
  );
  const [userName, setUserName] = useState<string>("");
  useEffect(() => {
    if (token) {
      const decode: DecodedProps = jwt_decode(token);
      const newToken = JSON.parse(token);
      api
        .get(`users/${decode.sub}`, {
          headers: {
            Authorization: `Bearer ${newToken}`,
          },
        })
        .then((user: any) => {
          const nameArray = user.data.fullName.split(" ");
          const firstName = nameArray[0];
          setUserName(firstName);
        })
        .catch((err) => console.error(err));
    }
  }, [token]);

  return (
    <UserMenuDiv>
      <h3> {userName} </h3>
      <a
        onClick={() => {
          history.push("/user", { message: "info" });
          location.reload();
        }}
      >
        Informações
      </a>
      <a
        onClick={() => {
          history.push("/user", { message: "favorites" });
          location.reload();
        }}
      >
        Favoritos
      </a>
      <a
        onClick={() => {
          history.push("/user", { message: "pets" });
          location.reload();
        }}
      >
        Seus pets
      </a>
      <a
        onClick={() => {
          localStorage.clear();
          history.push("/");
          location.reload();
        }}
      >
        Sair
      </a>
    </UserMenuDiv>
  );
};

export default UserMenu;
