import styled from "styled-components";

interface ContainerProps {
  isErr: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 10px;
  border: 1px solid ${(props) => (props.isErr ? "tomato" : `var(--third)`)};
  padding: 0 5px 5px 5px;
  background-color: white;

  > p {
    margin: 7px 0;
    font-size: 17px;
    font-family: var(--font-family-third);
    color: var(--third);
  }

  > span {
    color: tomato;
  }

  @media (min-width: 768px) {
    padding: 8px 8px 10px 26px;

    > p {
      font-size: 24px;
    }

    > span {
      top: 10px;
    }
  }
`;

export const TextAreaStyles = styled.textarea`
  height: 271px;
  font-size: 16px;
  border: none;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
