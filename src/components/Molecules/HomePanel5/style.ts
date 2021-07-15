import styled from "styled-components";
import backgroundHomePanel5 from "../../../assets/backgroundHomePanel5.png";

export const Panel5Div = styled.div`
    color: #694B3C;
    font-family: Roboto, 'Open Sans', sans-serif ; 
    width: 100%;
    background-image: url(${backgroundHomePanel5}); 
    background-repeat: no-repeat;
    background-size: 100%;
`;

export const ImgPlus = styled.img`
    width: 25px; 
    margin-bottom:10px;
    margin-left: 10px ;

    @media screen and (min-width:768px) and (max-width:1023px){
        width: 15px; 
        margin-bottom:10px; 
        margin-left: 5px ;
    }

    @media screen and ( max-width:767px){
        width: 13px; 
        margin-bottom:6px; 
        margin-left: 2px ;
    }
    
`; 

export const ImgSimbol = styled.img`
     width: 100px;
     margin: 20px; 

     @media screen and (min-width:768px) and (max-width:1023px){
        width: 70px;
    }

    @media screen and ( max-width:767px){
        width: 50px;
    }
`; 


export const Panel5DivInterna = styled.div`
    display: flex; 
    flex-direction: row; 
    align-items: center;
    justify-content: center;
    width: 50%;
    color: white; 
    margin: 0 auto; 

    div{
        display: flex; 
        flex-direction: column; 
        align-items: center;
        justify-content: center;
        width: 100%;       
    }  
    
    p{
        font-size: 50px; 
    }

    @media screen and (min-width:768px) and (max-width:1023px){
        padding-top:50px; 

        p{
             font-size: 36px; 
        }
    }

    @media screen and ( max-width:767px){

        p{
            font-size: 30px; 
        }
    }
`;
