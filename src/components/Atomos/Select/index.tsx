import { Container, SelectStyles } from "./styles";

interface SelectProps {
  register: any,
  options: string[],
  name?: string,
  [x:string]: any,
  label: string,
  placeholder?: string
}

const Select = ({ register, options, name, label, placeholder="Selecionar", ...rest }: SelectProps) => {
  return (
    <Container>
      <h3>{label}</h3>
      <SelectStyles {...register(name)} {...rest} placeholder={placeholder}>
        {options.map(value => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </SelectStyles>
    </Container>    
  );
}

export default Select;