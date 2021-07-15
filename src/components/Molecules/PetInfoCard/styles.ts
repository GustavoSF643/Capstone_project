import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  font-family: Roboto, "Open Sans", sans-serif;
  color: #393939;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  margin: 0 auto;
  padding: 30px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 1500px;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 5px;
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 30%;
  width: 80%;
  margin-top: 20px;
  border-radius: 50px;
  overflow: hidden;
  cursor: pointer;

  :hover {
    z-index: 2;
    overflow: visible;
    width: 100%;
    height: 45%;
    img {
      width: 80%;
    }
  }

  & > img {
    display: block;
    margin: 0 auto;
    border-radius: 50px;
    min-width: 100%;
    min-height: 100%;
  }

  @media (max-width: 768px) {
    border-radius: 0px;
    img {
      border-radius: 0px;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  width: 80%;
  height: 50%;
  font-size: 18px;

  h1 {
    font-size: 48px;
  }

  hr {
    height: 0px;
    width: 100%;
    color: #808080;
    border: 1px solid rgba(128, 128, 128, 0.42);
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 18px;
    }
  }
`;

export const Attributes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 5%;
  justify-content: space-around;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 400px;
    margin: 20px;
  }
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 40%;

  h2 {
    font-size: 36px;
  }
  h6 {
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 20px;
    }
    h6 {
      margin-top: 12px;
    }
    margin: 20px;
    width: 80%;

    height: fit-content;
  }
`;

export const History = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 30px;
  height: 10%;

  h2 {
    font-size: 36px;
  }
  p {
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 20px;
    }
    margin: 20px;
    width: 80%;
    height: fit-content;
  }
`;

export const ButtonContainer = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 20px;
  right: 30px;
`;

export const Title = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
`;
