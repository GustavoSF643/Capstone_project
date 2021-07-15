import { useHistory } from "react-router-dom";
import { useUserInfo } from "../../../Providers/UserInfo";
import { UserMenuDiv } from "./style";

const UserMenu = () => {
  const history = useHistory();
  const { userName } = useUserInfo();

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
