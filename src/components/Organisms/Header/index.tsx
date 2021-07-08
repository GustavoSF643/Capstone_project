import MenuHeader from "../../Molecules/MenuHeader";
import UserMenu from "../../Molecules/UserMenu";
import { HeaderDiv, LogoDiv, UserImgDiv, UserMenuDiv } from "./style";
import LogoHeader from "../../../assets/LogoHeader.png";
import Vector from "../../../assets/Vector.png";
import { useState } from "react";
import LoginModal from "../../Molecules/LoginModal";

const Header = () => {
  const [userMenuOpened, setUsermenuOpened] = useState(false);

  return (
    <HeaderDiv>
      <LogoDiv>
        <img src={LogoHeader} />
      </LogoDiv>
      <MenuHeader />
      {userMenuOpened && (
        <UserMenuDiv>
          <UserMenu />
        </UserMenuDiv>
      )}
      <UserImgDiv onClick={() => setUsermenuOpened(!userMenuOpened)}>
        <img src={Vector} />
      </UserImgDiv>
      <LoginModal
        modalOpened={userMenuOpened}
        setModalOpened={setUsermenuOpened}
      />
    </HeaderDiv>
  );
};

export default Header;
