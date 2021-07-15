import { StarContainer } from "../StarRating/style";
import { AiOutlineStar } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

interface StarRatingProps {
  register?: any;
  name: string;
}

const StarRating = ({ name, register }: StarRatingProps) => {
  const [rating, setRating] = useState<number>(0);

  return (
    <StarContainer>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              {...register(name)}
              type="radio"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <span>
              {ratingValue <= rating ? (
                <FaStar size="4em" />
              ) : (
                <AiOutlineStar size="4em" />
              )}
            </span>
          </label>
        );
      })}
    </StarContainer>
  );
};
export default StarRating;
