import { Container, RatingContainer, CardContainer } from "./style";

import Form from "../../components/Molecules/Form";
import * as yup from "yup";

import Input from "../../components/Atomos/Input";
import StarRating from "../../components/Atomos/StarRating";
import LargeButton from "../../components/Atomos/LargeButton";
import api from "../../services/api";
import { toast } from "react-toastify";
import CardComment from "../../components/Molecules/CardComment";
import { useEffect } from "react";
import { useState } from "react";
import { CommentProps } from "./../../types/Comment";
import TextArea from "../../components/Atomos/Textarea";
import { useUserInfo } from "../../Providers/UserInfo";
import { User } from "../../types/User";
const schema = yup.object().shape({
  title: yup.string().required().max(50),
  comment: yup.string().required().max(250).min(15),
  star: yup.number().positive().integer().required().min(1).max(5),
});

export interface DataProps {
  title: string;
  comment: string;
  star: number;
}

interface RatingProps {
  user: User;
  tokenParse: string;
}

const Rating = () => {
  const { tokenParse, user }: RatingProps = useUserInfo();
  const [rating, setRating] = useState<CommentProps[]>([]);

  const reloadRating = () => {
    api
      .get("rating")
      .then((response) => setRating(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    reloadRating();
  }, []);

  const onSubmit = (data: DataProps, reset: any) => {
    const newData = {
      title: data.title,
      comment: data.comment,
      rating: data.star,
      userId: user.id,
      img: user.img,
      name: user.fullName,
    };

    api
      .post("rating", newData, {
        headers: {
          Authorization: `Bearer ${tokenParse}`,
        },
      })
      .then((response) => {
        toast.success("Seu comentario foi salvo");
        console.log(response);
        reset();
      })
      .catch((error) => {
        toast.info(error.response.data);
      });

    reloadRating();
  };

  return (
    <>
      <Container>
        <RatingContainer>
          <h1>Faca sua avaliacao!</h1>
          <Form onSubmit={onSubmit} schema={schema}>
            <Input name="title" label="Titulo" placeholder="Preencher" />
            <TextArea
              name="comment"
              label="Descricao"
              placeholder="Preencher"
            />
            <StarRating name="star" />
            <LargeButton type="submit" onClick={reloadRating}>
              AVALIAR
            </LargeButton>
          </Form>
        </RatingContainer>
        <CardContainer>
          {rating.map((item) => (
            <CardComment user={item} key={item.id} />
          ))}
        </CardContainer>
      </Container>
    </>
  );
};

export default Rating;
