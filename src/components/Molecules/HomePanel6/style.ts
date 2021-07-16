import styled from "styled-components";

export const Panel6Div = styled.div`
  font-family: Taviraj;
  width: 90%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  padding: 30px 0;

  h2 {
    font-size: 35px;
    color: #7a3b6c;
  }

  h4 {
    font-size: 20px;
    color: #8b8b8b;
    margin: 10px 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;

    h2 {
      font-size: 35px;
    }

    h4 {
      font-size: 20px;
      color: #8b8b8b;
      margin: 10px 0;
    }
  }

  @media screen and (max-width: 399px) {
    h2 {
      font-size: 30px;
    }

    h4 {
      font-size: 15px;
      color: #8b8b8b;
      margin: 10px 0;
    }
  }
`;

export const PanelDivEsquerda = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30vw;
  margin: 20px 0;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    margin: 0 auto;
    width: 90vw;
  }

  @media screen and (max-width: 767px) {
    margin: 0 auto;
    margin-bottom: 50px;
    width: 90vw;
  }
`;

export const PanelDivDireita = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    flex-direction: row;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
