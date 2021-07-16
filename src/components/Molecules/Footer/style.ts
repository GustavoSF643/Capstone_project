import styled from "styled-components";

export const FooterDiv = styled.div`
    background-color: #694B3C; 
    color: white; 
    width: 100%;
    padding:10px; 
    display: flex;
    flex-direction: row;  
    align-items: right;
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
    
    @media screen and ( max-width:767px){
        flex-direction: column;  
        align-items: center;
    }
`;

export const Div = styled.div`
        display: flex;
        flex-direction: column; 
        align-items: center ;

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
    
        display: flex;
        flex-direction: row;
        justify-content: space-between; 
        align-items: center; 
`;

export const DivIcons = styled.div`    
    
        display: flex;
        flex-direction: row;
        justify-content: space-between; 
        align-items: center; 
        div{
            margin: 30px; 
        }    
`;

export const CopyrigthDiv = styled.div`
    background-color: #694B3C; 
    color: white; 
    width: 100%;
    height: 50px;
    padding:10px; 
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;



