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

  @media screen and (min-width:768px) and (max-width:1023px){
    width: 230px;
    height: 50px;
    font-size: 18px;

    img {
      width: 17px;
      height: 14px;
      margin-top: 3px;
      margin-left: 5px; 
    }
  }

  @media screen and ( max-width:767px){
    width: 130px;
    height: 35px;
    font-size: 13px;

    img {
      width: 10px;
      height: 10px;
      margin-top: 3px;
      margin-left: 3px; 
    }
  }

  @media screen and (max-width:399px){
    width: 110px;
    height: 25px;
    font-size: 10px;

    img {
      width: 8px;
      height: 8px;
      margin-top: 2px;
      margin-left: 3px; 
    }
  }
`;
