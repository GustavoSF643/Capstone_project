import styled from "styled-components";

export const Container = styled.div`
  padding-top: 4.5vw;
  display: flex;
  flex-direction: column;
`;

export const FakeBackground = styled.div`
  background-color: var(--primary);
  width: 80vw;
  padding: 70px 30px;
  margin: 100px auto 0 auto;
  border-radius: 20px;
  box-shadow: 2px 2px 10px black;
  margin-bottom: 100px;

  > p {
    margin-bottom: 45px;
    font-size: 48px;
    text-align: center;
    font-family: var(--font-family-second);
    color: var(--third);
  }

  @media (min-width: 768px) {


    > p {
      font-size: 72px;
    }
  }
`

export const H2 = styled.h2`
    margin: 7px 0;
    font-size: 24px;
    font-family: var(--font-family-third);
    color: var(--third);
    align-self: end;

    @media (min-width: 768px) {
      font-size: 33px;
    }
`;