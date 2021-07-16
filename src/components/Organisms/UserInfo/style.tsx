import styled from "styled-components";

export const UserInfoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  border-bottom: 2px solid var(--third);
  padding: 40px;
  padding-bottom: 70px;
  position: relative;
  min-height: 500px;
  gap: 30px;

  @media screen and (max-width: 768px) {
    padding: 50px 0 100px 0;
    min-height: 250px;
    flex-direction: column;
    gap: 40px;
  }
`;

export const InfoImageDiv = styled.div`
  min-width: 200px;
  max-width: 200px;
  max-height: 200px;
  overflow: hidden;
  border-radius: 100%;

  & > img {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    min-width: 100px;
    max-width: 100px;
    max-height: 100px;
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
    justify-content: left;
    width: 100%;
    padding-left: 10px;

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

  @media screen and (max-width: 768px) {
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 200px;
  }
`;
