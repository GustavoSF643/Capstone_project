import styled from "styled-components";
import Background from "./../../assets/backgroundcontact.svg";
import MobileBackground from "./../../assets/mobilebackground.svg";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-image: url(${Background});
  background-size: cover;
  justify-content: center;
  padding: 10px;

  h1 {
    width: 100%;
    font-size: 5rem;
    text-align: center;
    color: var(--third);
    margin-bottom: 8%;
  }

  @media (max-width: 768px) {
    background-image: url(${MobileBackground});
    background-size: cover;
    h1 {
      font-size: 3rem;
      margin-top: 40px;
    }
  }
`;

export const Card = styled.div`
  background-color: white;
  width: 230px;
  height: 230px;
  text-align: center;
  color: var(--third);
  font-family: var(--font-family-second);
  position: relative;
  background: #ffffff;
  box-shadow: 2px 4px 4px rgb(0 0 0 / 25%);
  border-radius: 20px;
  align-items: center;
  padding: 40px 0;
  margin: 20px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    position: absolute;
    top: -45px;
    right: 0;
    left: 0;
    margin: 0 auto;
  }

  h2 {
    text-transform: capitalize;
    margin-top: 30px;
  }

  h3 {
    border-bottom: 2px solid var(--tenth);
    text-transform: uppercase;
    padding-bottom: 10px;
  }

  @media (max-width: 768px) {
    margin: 30px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 15px;

  svg {
    margin: 10px;
  }

  a:hover {
    cursor: pointer;
    transform: scale(1.08);
  }

  a {
    color: var(--third);
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
