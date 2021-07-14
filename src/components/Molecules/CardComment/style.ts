import styled from "styled-components";

export const Card = styled.div`
  background-color: white;
  width: 290px;
  height: 290px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 22px 15px 15px 15px;
  font-size: 16px;
  font-family: var(--font-family-fourth);
`;

export const CardBody = styled.div`
  h3 {
    color: #7a7676;
    text-align: center;
    font-weight: 500;
  }

  p {
    padding: 12px 0 18px 0;
    color: var(--tenth);
    font-style: italic;
    text-align: justify;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  color: var(--tenth);

  img {
    width: 100px;
    border-radius: 50%;
    margin: 0 25px 0 15px;
  }
`;

export const RatingContainer = styled.div`
  h3 {
    text-align: center;
    padding-top: 10px;
    font-style: italic;
    font-weight: 300;
  }
`;
