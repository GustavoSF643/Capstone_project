import { LargeButtonStyled } from "./styles";
import patinha_botao from "../../../assets/patinha_botao.png"; 
import { ReactNode } from "react";

interface InputProps { 
    children: ReactNode;
    [x:string]: any;
}
  
const LargeButton = ({ children }: InputProps) => {
  return (
      <LargeButtonStyled>
          {children} <img src={patinha_botao} />     
      </LargeButtonStyled>
  )    
}
  
export default LargeButton;