import styled from "styled-components";

interface ContainerProps {
  isErr: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: 100%;
  border-radius: 10px;
  border: 1px solid ${(props) => (props.isErr ? "tomato" : `var(--third)`)};
  padding: 0 5px 5px 5px;
  height: 80px;
  background-color: white;

  > label {
    margin: 4px 0;
    font-size: 17px;
    font-family: var(--font-family-third);
    color: var(--third);
    display: flex;
    flex-direction: column;
    
  }

  input {
    margin-top: 10px;
    width: 100%;
    border: none;
    font-size: 15px;
  }

  span {
    color: var(--err);
    position: relative;
    top: 20px;
  }

  @media (min-width: 768px) {
    padding: 8px 8px 10px 26px;

    > label {
      font-size: 24px;
      margin: 0;

    }

     input {
      font-size: 18px;
    }

    span {
      top: 10px;
    }
  }
`;
