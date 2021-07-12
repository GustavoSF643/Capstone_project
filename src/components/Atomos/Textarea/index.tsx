import { Container, TextAreaStyles } from "./styles";

interface TextAreaProps {
  register?: any,
  name: string,
  err?: any,
  [x:string]: any,
  label: string
}

const TextArea = ({register, label, name, err, ...rest}: TextAreaProps) => {
  const isErr = !!err[`${name}`];

  return (
    <Container isErr={isErr}>
      <p>{label}</p>
      <TextAreaStyles
        {...register(name)}
        {...rest}
      />
      <span>{err[`${name}`]?.message}</span>
    </Container>
  )
}

export default TextArea;