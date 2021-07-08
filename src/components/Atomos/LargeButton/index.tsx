import { LargeButtonStyled } from "./styles";
import patinha_botao from "../../../assets/patinha_botao.png"; 

interface InputProps { 
    label: string,
  }
  
  const LargeButton = ({ label }: InputProps) => {
    
    return (
        <LargeButtonStyled>
           {label} <img src={patinha_botao} />     
        </LargeButtonStyled>
    )    
  }
  
  export default LargeButton;