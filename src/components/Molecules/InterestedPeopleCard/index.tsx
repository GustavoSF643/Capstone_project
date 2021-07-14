import { InterestedPeople } from "../../../types/DecodedProps";
import { Container, PeopleInfoDiv } from "./style";
import { MdPlace, MdEmail } from "react-icons/md";
import { GiSmartphone } from "react-icons/gi";

interface InterestedPeopleCardProps {
  people: InterestedPeople;
}

const InterestedPeopleCard = ({ people }: InterestedPeopleCardProps) => {
  return (
    <Container>
      <figure>
        <img src={people.img} alt={`people${people.id}`} />
      </figure>
      <PeopleInfoDiv>
        <p>
          <MdPlace />
          <span>
            {people.city}, {people.state} <span>{people.district}</span>
          </span>
        </p>
        <p>
          <MdEmail />
          {people.email}
        </p>
        <p>
          <GiSmartphone /> {people.contact}
        </p>
      </PeopleInfoDiv>
    </Container>
  );
};

export default InterestedPeopleCard;
