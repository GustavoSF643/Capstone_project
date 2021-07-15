import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;

  h2 {
    font-size: 4rem;
    color: var(--third);
    font-family: var(--font-family-second);
  }

  img {
    width: 45%;
  }

  h3 {
    font-size: 2.5rem;
    color: var(--third);
    margin: 30px 0;
  }

  p {
    font-family: var(--font-family-third);
    font-size: 2rem;
    color: rgb(0, 0, 0, 0.7);
    margin-bottom: 60px;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 3.2rem;
    }

    h3,
    p {
      text-align: center;
    }
  }
`;
