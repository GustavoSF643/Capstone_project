import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
`;

export const RatingContainer = styled.div`
  width: 80vw;
  margin: 0 auto;
  margin-bottom: 70px;

  h1 {
    font-size: 3.2rem;
    text-align: center;
    font-family: var(--font-family-second);
    color: var(--third);
    margin: 40px 0;
  }

  svg {
    width: 80%;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
