import styled from "styled-components";

export const Container = styled.div`
  padding-top: 4.5vw;
  display: flex;
  flex-direction: column;
`;

export const FakeBackground = styled.div`
  background-color: var(--primary);
  width: 80vw;
  padding: 70px 30px 0 30px;
  margin: 100px auto 0 auto;
  border-radius: 20px;

  > p {
    margin-bottom: 45px;
    font-size: 48px;
    text-align: center;
  }

  @media (min-width: 768px) {
    > p {
      font-size: 72px;
    }
  }
`