import styled from "styled-components";

export const Container = styled.button`
  width: 300px;
  height: 80px;
  background-color: #e8667d;
  color: #ffffff;
  border-radius: 100px;
  font-size: 25px;
  font-family: Roboto, "Open Sans", sans-serif;
  cursor: pointer; 
  z-index: -1; 


  img {
    width: 28px;
    height: 21px;
  
  }

  div {
    width: 300px;
    height: 80px;
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;

  }
`;
