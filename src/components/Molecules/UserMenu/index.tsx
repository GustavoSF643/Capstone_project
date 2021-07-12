import { useHistory } from "react-router-dom";
import { UserMenuDiv } from "./style";

const UserMenu = () => {
  const history = useHistory();

  return (
    <UserMenuDiv>
      <h3> Usuário </h3>
      <a onClick={() => history.push("/user", { message: "info" })}>
        Informações
      </a>
      <a onClick={() => history.push("/user", { message: "favorites" })}>
        Favoritos
      </a>
      <a onClick={() => history.push("/user", { message: "pets" })}>
        Seus pets
      </a>
      <a
        onClick={() => {
          localStorage.clear();
          history.push("/");
        }}
      >
        Sair
      </a>
    </UserMenuDiv>
  );
};

export default UserMenu;
