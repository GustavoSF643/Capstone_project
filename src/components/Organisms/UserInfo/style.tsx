import styled from "styled-components";

export const UserInfoDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoImageDiv = styled.div`
  & > img {
    border-radius: 100%;
  }
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  color: var(--third);
`;
