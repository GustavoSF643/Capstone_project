import { Container } from "../ButtonHome/styles";
import "../ButtonHome/styles";

interface ButtonHomeProps {
  label: string;
  image_source: string;
}

const ButtonHome2 = ({ label, image_source }: ButtonHomeProps) => {
  return (
    <>
      <Container>
         <p>{label} <img src={image_source} /> </p>
      </Container>
    </>
  );
};
export default ButtonHome2;
