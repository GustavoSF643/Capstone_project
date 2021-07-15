import styled from "styled-components";

export const Panel6Div = styled.div`
    color: #694B3C;
    font-family: Roboto, 'Open Sans', sans-serif ; 
    width: 90%;
    padding: 10px; 
    display: flex; 
    flex-direction: row; 
    align-items: flex-end;
    justify-content: space-around;
    margin:50px auto; 

    h2{
        font-size: 45px ;
        color: #7A3B6C; 
        font-family: Taviraj;  
    }

    h4{
        font-size: 20px;
        color: #8B8B8B; 
        font-family: Taviraj;  
        text-align:center; 
        margin: 10px 0;    
    }
`;

export const PanelDivEsquerda = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center;
    width: 30% ; 
`;

export const PanelDivDireita = styled.div`
    display: flex; 
    flex-direction: row; 
    align-items: center;
`;