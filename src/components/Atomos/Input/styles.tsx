import styled from "styled-components";

interface ContainerProps {
  isErr: boolean
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  border-radius: 10px;
  border: 1px solid ${props => props.isErr ? "tomato" : '#694B3C'};
  padding: 8px 8px 10px 26px;
  box-sizing: border-box;
  height: 80px;

  > p {
    margin: 7px 0;
    font-size: 24px;
  }

  > input {
    width: 100%;
    border: none;
    margin: 0;
    padding: 0;
    font-size: 18px;
  }

  p:last-child {
    color: tomato;
  }
`;