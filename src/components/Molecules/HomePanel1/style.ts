import styled from "styled-components";

export const Panel1Div = styled.div`
    color: #694B3C;
    font-family: Roboto, 'Open Sans', sans-serif ; 
    width: 90vw;
    padding: 10px; 
    margin: 0 auto; 

    img{
        z-index: -1;
        width: 90vw;
        position: absolute; 
        margin: 0 auto;        
    }

    div{
        display: flex; 
        flex-direction: column; 
        align-items: center;
        justify-content: center;
        width: 60%;
        height: 800px;
    }   

    h2{
        font-size: 50px ;
    }

    h4{
        font-size: 20px; 
        margin: 20px;     
    }
`;

