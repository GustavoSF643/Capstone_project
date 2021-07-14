import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 10px 0;
  border-bottom: 1px solid gray;

  & > figure {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    overflow: hidden;
    margin: 10px;
  }

  & > figure > img {
    width: 100%;
  }
`;

export const PeopleInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;

  & :first-child > span {
    display: flex;
    flex-direction: column;
  }

  & > p {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
