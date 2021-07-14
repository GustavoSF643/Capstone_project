import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { DecodedProps } from "../../../types/DecodedProps";
import { UserMenuDiv } from "./style";
import jwt_decode from "jwt-decode";
import api from "../../../services/api";

interface UserMenuProps {
  userName: string;
}

const UserMenu = ({ userName }: UserMenuProps) => {
  const history = useHistory();

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
