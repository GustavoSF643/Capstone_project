import styled from "styled-components";

export const HeaderDiv = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  height: 70px;
  background-color: white;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
  z-index: 1;

  @media screen and (max-width: 768px) {
    height: 40px;
  }
`;

export const LogoDiv = styled.div`
  position: absolute;
  left: 0;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    height: 80%;
    margin-top: 4px;

    & > img {
      height: 100%;
    }
  }
`;

export const UserImgDiv = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  overflow: hidden;
  cursor: pointer;

  & > img {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    top: 5px;
    right: 5px;
    width: 30px;
    height: 30px;
  }
`;

export const UserMenuDiv = styled.div`
  position: absolute;
  right: 0;
  top: 70px;

  @media screen and (max-width: 768px) {
    top: 40px;
    width: 150px;
  }
`;

export const RegisterDiv = styled.div`
  position: absolute;
  right: 100px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  display: flex;
  align-items: center;
  width: 200px;
  font-size: 24px;
  font-family: var(--font-family-primary);

  & > a {
    display: flex;
    align-items: center;
    border-left: 3px solid var(--third);
    height: 100%;
    padding: 10px;
    margin-left: 10px;
    color: var(--third);
    font-weight: bold;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.5rem;
    right: 0;
    width: 120px;

    & > a {
      display: flex;
      align-items: center;
      justify-content: center;
      border-left: 1px solid var(--third);
      margin-left: 5px;
      width: 40%;
      padding: 0;
    }
  }
`;

export const RegisterButton = styled.button`
  background-color: var(--third);
  font-size: 24px;
  font-family: var(--font-family-primary);
  color: white;
  padding: 5px 10px;
  border-radius: 12px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 0.5rem;
    border-radius: 5px;
  }
`;
