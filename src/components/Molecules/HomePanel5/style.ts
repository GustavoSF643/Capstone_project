import styled from "styled-components";

export const Panel5Div = styled.div`
    color: #694B3C;
    font-family: Roboto, 'Open Sans', sans-serif ; 
    width: 200vh;
    height:70vh;
    padding: 10px; 
    margin: 30px auto; 
     

    h2{
        font-size: 45px ;
    }

    h4{
        font-size: 20px; 
        margin: 15px;     
    }

`;

export const Panel5Img = styled.img`
    z-index: -1;
    width: 200vh;
    height:300px;
    position: absolute; 
`;

export const ImgPlus = styled.img`
    width: 15px;
    height: 15px; 
    margin-bottom:10px; 
    
`; 

export const ImgSimbol = styled.img`
     width: 80px;
     height:80px;
     margin: 20px; 
`; 


export const Panel5DivInterna = styled.div`
    display: flex; 
    flex-direction: row; 
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 300px; 
    margin: 0 auto; 

    div{
        display: flex; 
        flex-direction: column; 
        align-items: center;
        justify-content: center;
        width: 50%;
        height: 300px;        
    }  
    
    p{
        font-size: 36px; 
        color: white; 

    }
`;
