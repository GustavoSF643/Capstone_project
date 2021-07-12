import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100vh;

  h2 {
    font-size: 4rem;
    color: var(--third);
    font-family: var(--font-family-second);
  }

  img {
    width: 800px;
    margin: 35px 0;
    z-index: 2;
  }

  h1 {
    height: 590px;
    width: 700px;
    font-size: 25rem;
    color: #e1e1e1;
    font-family: var(--font-family-fourth);
    font-weight: bold;
    position: absolute;
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
`;
