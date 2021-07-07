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
  height: 700px;
  background: #ffffff;
  border-radius: 20px;
  position: fixed;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 30px;

  h3 {
    font-size: 48px;
    color: var(--third);
  }
`;

export const Xdiv = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;
