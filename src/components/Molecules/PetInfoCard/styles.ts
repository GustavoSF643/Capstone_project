import styled from "styled-components";

export const Container = styled.div`
  width: 1086px;
  height: 1512px;
  background-color: #ffffff;
  color: #393939;
  cursor: pointer;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  margin: 0 auto;

  img {
    width: 937px;
    height: 393px;
    border-radius: 50px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #393939;
  font-family: Roboto, "Open Sans", sans-serif;
  cursor: pointer;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  width: 923px;
  height: 900px;
  font-size: 18px;

  h1 {
    font-size: 48px;
  }

  hr {
    height: 0px;
    width: 923px;
    color: #808080;
    border: 1px solid rgba(128, 128, 128, 0.42);
    margin: 0 auto;
  }
`;

export const Attributes = styled.div`
  display: flex;
  flex-direction: row;
  width: 923px;
  justify-content: space-around;
`;

export const About = styled.div`
  width: 923px;

  h2 {
    font-size: 36px;
  }
  h6 {
    margin-top: 30px;
  }
`;

export const History = styled.div`
  width: 923px;
  h2 {
    font-size: 36px;
  }
  p {
    margin-top: 30px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 937px;
  height: 393px;
  border-radius: 50px;
  margin-top: 40px;
`;

export const ButtonContainer = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 20px;
  right: 30px;
`;
