import { StarContainer } from "../StarRating/style";
import { AiOutlineStar } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

import { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0);

  return (
    <StarContainer>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <span>
              {ratingValue <= rating ? <FaStar /> : <AiOutlineStar />}
            </span>
          </label>
        );
      })}
    </StarContainer>
  );
};
export default StarRating;
