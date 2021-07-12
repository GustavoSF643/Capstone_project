import styled from "styled-components";

export const UserMenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--third);
  width: 233px;
  height: 223px;
  align-items: center;

  h3 {
    font-size: 24px;
    font-family: var(--font-family-second);
    color: white;
    border-bottom: 1px solid white;
    width: 170px;
    text-align: center;
    padding: 5px;
  }

  a {
    font-family: var(--font-family-third);
    color: white;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 100%;
    border-bottom: 1px solid white;
    cursor: pointer;
  }

  & :last-child {
    border-bottom: none;
  }
`;
