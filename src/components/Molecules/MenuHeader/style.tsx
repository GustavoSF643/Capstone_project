import styled from "styled-components";

interface MenuHeaderDivProps {
  menuMobileOpened: boolean;
}

export const MenuHeaderDiv = styled.div<MenuHeaderDivProps>`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 60%;
  a {
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--third);
  }

  @media screen and (max-width: 768px) {
    display: ${(props) => (props.menuMobileOpened ? "flex" : "none")};
    background-color: var(--third);
    flex-direction: column;
    gap: 5px;
    position: absolute;
    top: 40px;
    width: 50%;
    height: 150px;
    border: 1px solid white;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 0.7rem;
      border-bottom: 1px solid #fafafa;
      width: 70%;
      height: 25%;
    }

    & > :last-child {
      border-bottom: none;
    }
  }
`;

export const MenuMobileButton = styled.button`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    margin: auto 0;
    color: var(--third);
    font-family: var(--font-family-second);
    font-weight: bold;
    background: none;

    & > p {
      border-bottom: 1px solid var(--third);
      height: 25px;
    }
  }
`;
