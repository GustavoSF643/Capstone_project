import styled from "styled-components";

export const LargeButtonStyled = styled.button`
  width: 250px;
  height: 70px;
  background-color: #694b3c;
  color: white;
  border-radius: 10px;
  font-size: 24px;
  font-family: Roboto, "Open Sans", sans-serif;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 46px;
    height: 40px;
    margin-left: 20px;
  }

  @media (min-width: 768px) {
    width: 450px;
  }
`;
