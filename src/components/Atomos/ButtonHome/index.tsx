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
        <div>
          <p>{label}</p> <img src={image_source} />
        </div>  
      </Container>
    </>
  );
};
export default ButtonHome;
