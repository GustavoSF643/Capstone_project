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
`;

export const LogoDiv = styled.div`
  position: absolute;
  left: 0;
  cursor: pointer;
`;

export const UserImgDiv = styled.div`
  position: absolute;
  top: 15px;
  right: 20px;
  cursor: pointer;
`;

export const UserMenuDiv = styled.div`
  position: absolute;
  right: 0;
  top: 70px;
`;

export const RegisterDiv = styled.div`
  position: absolute;
  right: 90px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  display: flex;
  align-items: center;
  width: 200px;
  font-size: 24px;
  font-family: var(--font-family-primary);

  & > a {
    border-left: 3px solid var(--third);
    height: 50px;
    padding: 10px;
    margin-left: 10px;
    color: var(--third);
    font-weight: bold;
    cursor: pointer;
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
`;
