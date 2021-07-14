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
`;

export const RatingContainer = styled.div`
  h3 {
    text-align: center;
    padding-top: 10px;
    font-style: italic;
    font-weight: 300;
    margin-left: 30px;
  }
`;
