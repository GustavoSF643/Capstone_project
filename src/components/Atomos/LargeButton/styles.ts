import styled from "styled-components";

export const LargeButtonStyled = styled.button`
    width: 250px; 
    height: 70px;
    background-color: #694B3C; 
    color: white; 
    border-radius: 10px; 
    font-size: 24px;
    font-family: Roboto, 'Open Sans', sans-serif;
    cursor: pointer; 
    margin: auto;

    img{
      width: 46px; 
      height: 40px;  
    }

    @media (min-width: 768px) {
      width: 450px; 
    }
`;