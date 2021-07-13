import styled from "styled-components";

interface CardProps {
  img: string;
}

export const Card = styled.div<CardProps>`
  height: 480px;
  width: 290px;
  position: relative;
  cursor: pointer;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 16px;
  overflow: hidden;
  background-position-y: -15px;

  &:hover {
    transform: scale(1.02);
    box-shadow: 8px 8px 6px rgb(128, 128, 128, 0.4);
  }

  &:hover :last-child {
    top: 260px;
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const CardInfo = styled.div`
  position: absolute;
  top: 411px;
  transition-duration: 350ms;
  transition-timing-function: ease-in-out;
`;

export const CardDescription = styled.div`
  height: 300px;
  width: 290px;
  background-color: white;
  border-radius: 70px 70px 16px 16px;
  padding: 10px 20px 0 20px;

  h1 {
    text-align: center;
    padding: 15px 0 -15px 0;
    font-family: var(--font-family-second);
    color: var(--seventh);
  }

  div {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid var(--eighth);
  }

  h2 {
    font-family: var(--font-family-third);
    font-weight: 300;
    color: var(--ninth);
    padding: 8px 0 0 8px;
  }

  h2:first-child {
    color: var(--seventh);
  }
`;
