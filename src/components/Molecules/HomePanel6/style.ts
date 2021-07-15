import styled from "styled-components";

export const Panel6Div = styled.div`
    font-family: Taviraj;
    width: 90%;
    height: 80vh; 
    padding: 10px; 
    display: flex; 
    flex-direction: row; 
    align-items: flex-end;
    justify-content: space-around;
    margin:0 auto;
    text-align:center; 

    h2{
        font-size: 35px ;
        color: #7A3B6C;   
    }

    h4{
        font-size: 20px;
        color: #8B8B8B;          
        margin: 10px 0;    
    }

    @media screen and (min-width:768px) and (max-width:1023px){
        flex-direction: column; 
        height: 140vh; 
    }

    @media screen and ( max-width:767px){
        flex-direction: column; 
        height: 160vh;

        h2{
            font-size: 35px ; 
        }

        h4{
            font-size: 20px;
            color: #8B8B8B;          
            margin: 10px 0;    
        }
    }
`;

export const PanelDivEsquerda = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center;
    width: 30vw ;
    margin: 20px 0;  

    @media screen and (min-width:768px) and (max-width:1023px){
        margin: 30px auto; 
        width: 90vw ;
    }

    @media screen and ( max-width:767px){
        width: 90vw ; 
    }
`;

export const PanelDivDireita = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content: space-around;
    align-items: center; 
    margin: 0 auto;

    @media screen and (min-width:768px) and (max-width:1023px){
        flex-direction: row; 
        margin-bottom: 70px; 
    }

    @media screen and ( max-width:767px){
        flex-direction: column;  
    }

`;