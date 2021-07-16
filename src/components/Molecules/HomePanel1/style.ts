import styled from "styled-components";

export const Panel1Div = styled.div`
  color: #694b3c;
  font-family: Roboto, "Open Sans", sans-serif;
  width: 90vw;
  background: linear-gradient(
    180deg,
    rgba(255, 230, 0, 0.7) 73.05%,
    rgba(255, 230, 0, 0) 100%
  );
  border-radius: 100px 100px 0px 0px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  text-align: center;

  & > img {
    width: 400px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;
  }

  @media screen and (min-width: 1024px) {
    margin: 0 auto;

    div {
      height: 600px;
    }

    h2 {
      font-size: 50px;
    }

    h4 {
      font-size: 20px;
      margin: 20px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 20px 0;
    margin: 0 auto;

    div {
      width: 60%;
      height: 480px;
    }

    & > img {
      margin-top: 20px;
      width: 300px;
      margin-right: 65px;
    }
  }

  @media screen and (min-width: 400px) and (max-width: 767px) {
    padding: 20px 0;
    margin: 10px auto 0;

    h4 {
      font-size: 15px;
      margin: 10px;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 20px 0;
    margin: 30px auto 0;

    div {
      width: 60%;
      height: 260px;
    }

    & > img {
      margin-top: 20px;
      width: 120px;
      max-height: 200px;
    }
  }

  @media screen and (max-width: 399px) {
    padding: 20px 0;
    margin: 10px auto 0;
    border-radius: 50px 50px 0px 0px;

    & > img {
      margin-top: 20px;
      width: 120px;
      max-height: 200px;
    }

    div {
      width: 40%;
    }

    h2 {
      font-size: 1.1em;
    }

    h4 {
      font-size: 8px;
      margin: 8px;
    }
  }
`;
