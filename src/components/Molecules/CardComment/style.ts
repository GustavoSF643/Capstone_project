import styled from "styled-components";

export const Card = styled.div`
  background-color: white;
  width: 335px;
  height: 335px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 22px;
  font-size: 20px;
  font-family: var(--font-family-fourth);
  margin: 20px;

  @media screen and ( max-width: 399px){
    width: 235px;
    height: 260px;
    padding: 17px;
    font-size: 15px;
    margin: 15px;
  }
`;

export const CardBody = styled.div`
  h3 {
    color: #7a7676;
    text-align: center;
    font-weight: 500;
    margin: 8px;
  }

  p {
    padding: 18px 0;
    color: var(--tenth);
    font-style: italic;
    text-align: justify;

    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
    max-height: 5em;
    line-height: 1.5em;
  }

  @media screen and ( max-width: 399px){
    h3 {
      font-weight: 500;
      margin: 5px;
    }

    p {
      padding: 15px 0;
      max-height: 5em;
      line-height: 1.5em;
    }
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  color: var(--tenth);

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 25px 15px;
    min-width: 100px;
  }

  @media screen and ( max-width: 399px){
    img {
      width: 50px;
      height: 50px;
      border-radius: 100%;
      margin: 25px 5px;
      min-width: 50px;
    }
  }
`;

export const RatingContainer = styled.div`
  h3 {
    text-align: center;
    padding-top: 10px;
    font-style: italic;
    font-weight: 300;
    margin-left: 30px;
  }

  @media screen and ( max-width: 399px){
    h3 {
      padding-top: 1px;
      font-weight: 150;
      margin-left: 15px;
    }
  }
`;
