import styled from "styled-components";

interface LoginDivProps {
  isOpened: boolean;
}

export const BackgroundModal = styled.div<LoginDivProps>`
  display: ${(props) => (props.isOpened ? "block" : "none")};
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1;
`;

export const LoginDiv = styled.div`
  width: 70vw;
  max-width: 1000px;
  min-width: 500px;
  height: 70vh;
  background: #ffffff;
  border-radius: 20px;
  position: fixed;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px;

  h3 {
    font-size: 36px;
    color: var(--third);
  }

  @media screen and (max-width: 768px) {
    min-width: 85vw;
    height: 70vh;
    padding: 30px;
  }
`;

export const Xdiv = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;

  & > img {
    width: 40px;
  }
`;

export const LoginFormDiv = styled.div`
  display: block;
  margin: auto 0;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    height: 70%;
  }
`;
