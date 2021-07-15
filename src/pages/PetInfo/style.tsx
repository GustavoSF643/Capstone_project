import styled from "styled-components";

export const Container = styled.div`
  width: 90vw;
  margin: 120px auto;

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export const ContainerPeoples = styled.div`
  display: flex;
  flex-direction: column;
  width: 28%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 50%;
  }
`;

export const PetInfoDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100vw;
  }
`;

export const PetInfoCardDiv = styled.div`
  width: 67%;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    box-shadow: unset;
    margin-top: 50px;
  }
`;

export const UserDiv = styled.div`
  width: 100%;
  min-width: 250px;
  height: 300px;
  background-color: white;
  position: relative;
  background: #ffffff;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 40px 0;
  margin-top: 60px;

  & > img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    position: absolute;
    top: -45px;
    right: 0;
    left: 0;
    margin: 0 auto;
  }

  & > h2 {
    font-size: 24px;
    text-align: center;
    width: 80%;
    margin-bottom: 30px;
  }

  & > p {
    display: flex;
    align-items: center;
    width: 80%;
    font-size: 18px;
    color: #393939;
    border-top: 1px solid var(--tenth);
    padding: 10px;
  }
`;

export const InterestedPeopleDiv = styled.div`
  background-color: white;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 100%;
  height: 500px;
  min-width: 250px;
  margin-top: 50px;
  padding: 20px;

  & > h3 {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
  }
`;
