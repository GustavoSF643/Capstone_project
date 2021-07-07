import { DeepMap, FieldValues, Message, MultipleFieldErrors, Ref } from "react-hook-form";
import { Container } from "./styles";

interface FieldError {
  type: string,
  ref?: Ref,
  types?: MultipleFieldErrors,
  message?: Message,
  name: string
};


interface InputProps {
  register?: any,
  name?: string,
  label?: string,
  err?: any,
  [x:string]: any;
}

const Input = ({ register, name, label, err, ...rest }: InputProps) => {
  const isErr = !!err[`${name}`];
  
  return (
    <Container isErr={isErr}>
      <p>{label}</p>
      <input 
        {...register(name)} 
        {...rest} 
        placeholder="Preencher"
      />
      <p>{err[`${name}`]?.message}</p>
    </Container>
    );
}

export default Input;