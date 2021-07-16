import { MenuHeaderDiv, MenuMobileButton } from "./style";
import { useUserInfo } from "./../../../Providers/UserInfo";
import { useState } from "react";

const MenuHeader = () => {
  const { isLogin } = useUserInfo();
  const [menuMobileOpened, setMenuMobileOpened] = useState(false);

  return (
    <>
      <MenuHeaderDiv menuMobileOpened={menuMobileOpened}>
        <a href="/dashboard">ADOTAR</a>
        <a href="/petregister">REGISTRAR PET</a>
        <a href="/rating">AVALIAÇÔES</a>
        <a href="/contact">CONTATO</a>
      </MenuHeaderDiv>
      <MenuMobileButton onClick={() => setMenuMobileOpened(!menuMobileOpened)}>
        <p>Menu</p>
      </MenuMobileButton>
    </>
  );
};

export default MenuHeader;
