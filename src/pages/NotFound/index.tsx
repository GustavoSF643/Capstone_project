import { Container } from "./style";
import NotFoundDog from "../../assets/notfounddog2.png";
import LargeButton from "../../components/Atomos/LargeButton";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  const redirectToHome = () => {
    history.push("/");
  };

  return (
    <>
      <Container>
        <h2>Oops!</h2>
        <img src={NotFoundDog} />
        <h1>404</h1>
        <h3>A página que você está procurando não existe.</h3>
        <p>
          Você pode ter digitado incorretamente o endereço ou a página pode ter
          sido movida.
        </p>
        <LargeButton onClick={redirectToHome}>VOLTAR PARA INICIO</LargeButton>
      </Container>
    </>
  );
};

export default NotFound;
