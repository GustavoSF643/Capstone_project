import styled from "styled-components";

export const UserPetsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
  gap: 50px;
`;

export const NotPetsDiv = styled.div`
  & > h3 {
    margin: 70px;
    font-size: 24px;
    color: var(--third);
    font-family: var(--font-family-third);
  }
`;
