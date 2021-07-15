import { MenuHeaderDiv } from "./style";
import { useUserInfo } from "./../../../Providers/UserInfo";

const MenuHeader = () => {
  const { isLogin } = useUserInfo();

  return (
    <MenuHeaderDiv>
      <a href="/dashboard">ADOTAR</a>
      <a href="/petregister">REGISTRAR PET</a>
      <a href="/contact">CONTATO</a>
    </MenuHeaderDiv>
  );
};

export default MenuHeader;
