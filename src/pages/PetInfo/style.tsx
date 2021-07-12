import styled from "styled-components";

export const Container = styled.div`
  width: 90vw;
  margin: 120px auto;
`;

export const PetInfoDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
`;

export const PetInfoCardDiv = styled.div`
  width: 70%;
  height: 80vw;
`;

export const UserDiv = styled.div`
  width: 25%;
  height: 35%;
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
