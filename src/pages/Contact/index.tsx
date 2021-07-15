import JessicaPhoto from "./../../assets/jessica.jpg";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGitlab } from "react-icons/ai";
import { Card, IconsContainer, Container, ContainerCard } from "./style";
import CalebePhoto from "./../../assets/calebe.jpeg";
import GustavoPhoto from "./../../assets/gustavo.jpg";
import MariaPhoto from "./../../assets/maria.jpg";
import MichelPhoto from "./../../assets/michel.png";

const crewList = [
  {
    name: "calebe navarro",
    role: "product owner",
    img: CalebePhoto,
    linkedin: "https://www.linkedin.com/in/calebenavarro/",
    gitlab: "https://gitlab.com/CalebeNavarro",
  },
  {
    name: "gustavo silva",
    role: "teach leader",
    img: GustavoPhoto,
    linkedin: "https://www.linkedin.com/in/gustavo-silva-424282203",
    gitlab: "https://gitlab.com/GustavoSil",
  },
  {
    name: "jessica arasake",
    role: "quality assurance",
    img: JessicaPhoto,
    gitlab: "https://gitlab.com/jessyshiotani",
  },
  {
    name: "maria marquelio",
    role: "quality assurance",
    img: MariaPhoto,
    linkedin: "https://www.linkedin.com/in/mmarquelio/",
    gitlab: "https://gitlab.com/maria_marquelio",
  },
  {
    name: "michel capela",
    role: "scrum master",
    img: MichelPhoto,
    linkedin: "https://www.linkedin.com/in/michel-aleksander-capela-200201202/",
    gitlab: "https://gitlab.com/michel-capela",
  },
];

const Contact = () => {
  return (
    <>
      <Container>
        <h1>Contatos</h1>
        <ContainerCard>
          {crewList.map((crew, index) => (
            <Card key={index}>
              <img src={crew.img} />
              <h2>{crew.name}</h2>
              <h3>{crew.role}</h3>
              <IconsContainer>
                <a href={crew.linkedin} target="_blank">
                  <FaLinkedin size="2.4em" />
                </a>
                <a href={crew.gitlab} target="_blank">
                  <AiFillGitlab size="2.4em" />
                </a>
              </IconsContainer>
            </Card>
          ))}
        </ContainerCard>
      </Container>
    </>
  );
};
export default Contact;
