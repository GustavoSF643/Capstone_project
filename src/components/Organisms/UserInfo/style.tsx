import styled from "styled-components";

export const UserInfoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  border-bottom: 2px solid var(--third);
  padding: 50px;
  position: relative;
`;

export const InfoImageDiv = styled.div`
  & > img {
    border-radius: 100%;
    width: 250px;
  }
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  color: var(--third);
  margin: 50px;

  & > h3 {
    font-size: 32px;
  }

  & > p {
    font-size: 24px;
  }
`;

export const ButtonDiv = styled.div`
  position: absolute;
  right: 30px;
  bottom: 5px;
`;
