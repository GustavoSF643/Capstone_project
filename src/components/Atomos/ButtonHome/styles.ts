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
  align-items: center;

  img {
    width: 28px;
    height: 21px;
    margin-top: 4px;
    margin-left: 8px; 
    z-index:2 ;
  }
`;
