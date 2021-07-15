import styled from "styled-components";

export const Panel1Div = styled.div`
    color: #694B3C;
    font-family: Roboto, 'Open Sans', sans-serif ; 
    width: 90vw;

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
    }   

    @media screen and (min-width:1024px ){
        padding: 10px 0;
        margin: 0 auto ; 

        div{
            width: 60%;
            height: 600px;
        }  
         
        h2{
            font-size: 50px ;
        }

        h4{
            font-size: 20px; 
            margin: 20px;     
        } 
    }

    @media screen and (min-width:768px) and (max-width:1023px){
        padding: 20px 0 ;
        margin: 0 auto ;

        div{
            width: 60%;
            height: 480px; 

        }  
         
        h2{
            font-size: 2.5em ;
        }

        h4{
            font-size: 15px; 
            margin: 10px;     
        } 
    }

    @media screen and ( max-width:767px){
        padding: 20px 0 ;
        margin: 30px auto 0; 

        div{
            width: 60%;
            height: 260px; 

        }  
         
        h2{
            font-size: 1.3em ;
        }

        h4{
            font-size: 10px; 
            margin: 8px;     
        } 
    }

    

`;

