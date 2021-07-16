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
};

const Input = ({ register, name, label, err, ...rest }: InputProps) => {
  const isErr = !!err[`${name}`];
  
  return (
    <Container isErr={isErr}>
      <label>
        {label}
        <input 
          {...register(name)} 
          {...rest} 
        />
      </label>
      <span>{err[`${name}`]?.message}</span>
    </Container>
    );
}

export default Input;