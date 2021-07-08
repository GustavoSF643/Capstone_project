import { Container } from "../ButtonHome/styles";
import "../ButtonHome/styles";

interface ButtonHomeProps {
  label: string;
  image_source: string;
}

const ButtonHome = ({ label, image_source }: ButtonHomeProps) => {
  return (
    <>
      <Container>
        {label} <img src={image_source} />
      </Container>
    </>
  );
};
export default ButtonHome;
