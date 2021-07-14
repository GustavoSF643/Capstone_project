import { StarContainer } from "../StarRatingCard/style";
import { FaStar } from "react-icons/fa";

interface StarRatingCardProps {
  rating: number;
}

const StarRatingCard = ({ rating }: StarRatingCardProps) => {
  return (
    <StarContainer>
      {rating &&
        [...Array(rating)].map((star, index) => {
          return (
            <label key={index}>
              <input type="radio" />
              <span>{rating && <FaStar />}</span>
            </label>
          );
        })}
    </StarContainer>
  );
};
export default StarRatingCard;
