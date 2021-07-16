import styled from "styled-components";

interface UserMenuProps {
  infoOpened: boolean;
  favoritesOpened: boolean;
  petsOpened: boolean;
}

export const UserDiv = styled.div`
  background-color: white;
  width: 80vw;
  padding: 40px;
  margin: 100px auto;

  & > h3 {
    color: var(--third);
    font-size: 3rem;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    padding: 20px 10px;

    & > h3 {
      font-size: 2rem;
    }
  }
`;

export const UserMenuDiv = styled.div<UserMenuProps>`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 40px;

  & > button {
    font-size: 2rem;
    width: 40%;
    color: var(--fourth);
    background: none;
    padding: 10px 0;
  }

  & > :first-child {
    border-bottom: ${(props) =>
      props.infoOpened ? "3px solid var(--fourth)" : "none"};
  }
  & > :nth-child(2) {
    border-bottom: ${(props) =>
      props.favoritesOpened ? "3px solid var(--fourth)" : "none"};
  }
  & > :last-child {
    border-bottom: ${(props) =>
      props.petsOpened ? "3px solid var(--fourth)" : "none"};
  }

  @media screen and (max-width: 768px) {
    & > button {
      font-size: 1rem;
    }
  }
`;
