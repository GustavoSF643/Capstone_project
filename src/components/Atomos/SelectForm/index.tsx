import { Container, SelectStyles } from "./styles";

interface SelectFormProps {
  register?: any,
  name?: string,
  label?: string,
  err?: any,
  [x:string]: any,
  options: string[]
};


const SelectForm = ({ register, err, label, options, name, ...rest }: SelectFormProps) => {
  const isErr = !!err[`${name}`];

  return (
    <Container isErr={isErr}>
      <p>{label}</p>

      <SelectStyles {...register(name)} {...rest}>
        {options.map(value => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </SelectStyles>
      <span>{err[`${name}`]?.message}</span>
    </Container>
  );
};

export default SelectForm;