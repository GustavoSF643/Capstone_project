import { LargeButtonStyled } from "./styles";
import patinha_botao from "../../../assets/patinha_botao.png";
import { ReactNode } from "react";

interface InputProps {
  children: ReactNode;
  [x: string]: any;
  onClick?: () => void;
}

const LargeButton = ({ children, onClick }: InputProps) => {
  return (
    <LargeButtonStyled onClick={onClick}>
      {children} <img src={patinha_botao} />
    </LargeButtonStyled>
  );
};

export default LargeButton;
