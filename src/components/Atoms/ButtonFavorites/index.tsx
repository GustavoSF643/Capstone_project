import { Container } from "./style";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
const ButtonFavorites = () => {
  const [like, setLike] = useState(false);

  const addLike = () => {
    setLike(!like);
  };

  return (
    <button onClick={addLike}>
      <Container>
        {like ? (
          <FaRegHeart style={{ color: "var(--fifth)" }} />
        ) : (
          <FaHeart style={{ color: "var(--fifth)" }} />
        )}
      </Container>
    </button>
  );
};
export default ButtonFavorites;
