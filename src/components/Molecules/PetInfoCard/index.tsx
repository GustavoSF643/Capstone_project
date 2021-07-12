import {
  Container,
  TextContainer,
  Attributes,
  History,
  About,
  ImageContainer,
  ButtonContainer,
} from "./styles";
import LargeButton from "../../Atomos/LargeButton";
import ButtonFavorites from "../../Atomos/ButtonFavorites";

const PetInfoCard = () => {
  return (
    <>
      <Container>
        <ImageContainer>
          <img src="https://p2.trrsf.com/image/fget/cf/600/400/images.terra.com/2020/08/14/o-gatinho-de-cada-signo-15721.jpeg"></img>
          <ButtonContainer>
            <ButtonFavorites />
          </ButtonContainer>
        </ImageContainer>

        <TextContainer>
          <div>
            <h1>Perola</h1>
            <p>Curitiba, PR</p>
            <p>Jardim Botanico</p>
          </div>
          <hr />
          <Attributes>
            <label>Siames</label>&bull;
            <label>5 anos</label>&bull;
            <label>Femea</label>&bull;
            <label>Pequeno</label>&bull;
            <label>Preto/Amarelo</label>&bull;
            <label>Pelo curto</label>
          </Attributes>
          <hr />
          <About>
            <h2>Sobre</h2>
            <h6>CARACTERISTICAS</h6>
            <p>
              Gosta de brincar. Dorme 20h/ dia. Come 200g de comida/dia. Gosta
              de sair a noite. Nao gosta de criancas.
            </p>
            <h6>SAUDE</h6>
            <p>Vacinações em dia.</p>
            <h6>COMPORTAMENTO</h6>
            <p>Outros gatos somente.</p>
          </About>
          <hr />
          <History>
            <h2>Historia</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </History>
          <hr />
        </TextContainer>
        <LargeButton>Estou interessado</LargeButton>
      </Container>
    </>
  );
};

export default PetInfoCard;
