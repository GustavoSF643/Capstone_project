import {
  Card,
  CardBody,
  CardInfo,
  RatingContainer,
} from "../CardComment/style";
import StarRating from "../../Atomos/StarRating";
import { User } from "./../../../types/User";

interface CardCommentProps {
  title: string;
  comment: string;
  perfil: User;
}

const CardComment = ({ title, comment, perfil }: CardCommentProps) => {
  return (
    <Card>
      <CardBody>
        <h3>{title}</h3>
        <p>{comment}</p>
      </CardBody>
      <CardInfo>
        <img src={perfil.img} />
        <RatingContainer>
          <StarRating />
          <h3>{perfil.fullname}</h3>
        </RatingContainer>
      </CardInfo>
    </Card>
  );
};
export default CardComment;
