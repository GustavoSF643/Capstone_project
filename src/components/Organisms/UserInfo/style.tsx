import styled from "styled-components";

export const UserInfoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  border-bottom: 2px solid var(--third);
  padding: 50px;
  position: relative;
  min-height: 400px;
  gap: 30px;

  @media screen and (max-width: 768px) {
    padding: 10px 0 50px 30px;
    min-height: 250px;
  }
`;

export const InfoImageDiv = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 100%;

  & > img {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  color: var(--third);

  & > h3 {
    font-size: 32px;
  }

  & > p {
    font-size: 24px;
  }

  @media screen and (max-width: 768px) {
    margin: 0;
    margin-left: 20px;

    & > h3 {
      font-size: 1.2rem;
    }

    & > p {
      font-size: 0.8rem;
    }
  }
`;

export const ButtonDiv = styled.div`
  position: absolute;
  right: 30px;
  bottom: 5px;
`;
