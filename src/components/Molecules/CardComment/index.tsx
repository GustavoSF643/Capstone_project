import {
  Card,
  CardBody,
  CardInfo,
  RatingContainer,
} from "../CardComment/style";
import StarRatingCard from "./../../Atomos/StarRatingCard";
import { CommentProps } from "../../../types/Comment";

export interface CardCommentProps {
  user: CommentProps;
}

const CardComment = ({ user }: CardCommentProps) => {
  return (
    <Card>
      <CardBody>
        <h3>{user.title}</h3>
        <p>{user.comment}</p>
      </CardBody>
      <CardInfo>
        <img src={user.img} />
        <RatingContainer>
          <StarRatingCard rating={user.rating} />
          <h3>{user.name}</h3>
        </RatingContainer>
      </CardInfo>
    </Card>
  );
};
export default CardComment;
