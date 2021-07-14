import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
`;

export const RatingContainer = styled.div`
  h1 {
    font-size: 3.2rem;
    text-align: center;
    font-family: var(--font-family-second);
    color: var(--third);
    margin: 40px 0;
  }

  svg {
    width: 80px;
  }
`;

export const CardContainer = styled.div`
  margin: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
