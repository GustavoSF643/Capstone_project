import MenuHeader from "../../Molecules/MenuHeader";
import UserMenu from "../../Molecules/UserMenu";
import { HeaderDiv, LogoDiv, UserImgDiv, UserMenuDiv } from "./style";
import LogoHeader from "../../../assets/LogoHeader.png";
import Vector from "../../../assets/Vector.png";
import { useState } from "react";

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
    </HeaderDiv>
  );
};

export default Header;
