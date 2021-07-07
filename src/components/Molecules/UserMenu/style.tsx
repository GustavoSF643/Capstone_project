import styled from "styled-components";

export const UserMenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--third);
  width: 233px;
  height: 230px;
  align-items: center;
  /* justify-content: space-evenly; */

  h3 {
    font-size: 24px;
    color: white;
    border-bottom: 1px solid white;
    width: 170px;
    text-align: center;
    padding: 10px;
  }

  a {
    color: white;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 100%;
    border-bottom: 1px solid white;
  }
`;
