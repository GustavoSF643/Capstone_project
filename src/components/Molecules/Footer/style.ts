import styled from "styled-components";

export const FooterDiv = styled.div`
    background-color: #694B3C; 
    color: white; 
    width: 100%;
    height: 250px;
    padding:10px; 
    display: flex;
    flex-direction: row;  
    align-items: center;
    justify-content: space-evenly;

    a {
        font-size: 18px;
        font-weight: bold;
        color:whitesmoke;
        text-decoration: none;
    }

    img{
        width: 200px;
        height: 75px;   
    }   

    div{
        display: flex;
        flex-direction: column; 
        align-items: center;
        justify-content: space-evenly;  
    }
`;

export const Div = styled.div`
        display: flex;
        flex-direction: column;  

        input{
            border-radius: 6px; 
            border-color: white;
            margin: 5px; 
        }  

        button{
            color:#694B3C; 
            border-radius: 5px; 
            margin: 5px; 
            font-size: 20px; 
           width: 150px; 
           height: 25px; 
        }    
`;

export const Icons = styled.div`    
    div{
        display: flex;
        flex-direction: row;
        justify-content: space-between; 
        align-items: center;
    }       
`;


