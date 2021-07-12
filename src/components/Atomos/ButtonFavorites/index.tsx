import { Button } from "./style";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

const ButtonFavorites = () => {
  const [like, setLike] = useState(false);

  const addLike = () => {
    setLike(!like);
  };

  return (
    <Button onClick={addLike}>{like ? <FaRegHeart /> : <FaHeart />}</Button>
  );
};
export default ButtonFavorites;
