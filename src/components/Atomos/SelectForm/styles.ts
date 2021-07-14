import styled from "styled-components";

interface ContainerProps {
  isErr: boolean
}


export const Container = styled.div<ContainerProps>`
  position: relative;
  width: 100%;
  border-radius: 10px;
  border: 1px solid ${props => props.isErr ? "tomato" : `var(--third)`};
  padding: 0 5px 5px 5px;
  
  > p {
    margin: 7px 0;
    font-size: 17px;
    font-family: var(--font-family-third);
    color: var(--third);
  }
  
  > h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  > span {
    color: var(--err);
    position: relative;
    top: 20px;
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

export const SelectStyles = styled.select`
  width: 100%;
  height: 50px;

  border: none;
  background-color: var(--white);
  font-size: 18px;
  color: black;
  font-family: var(--font-family-third);
  color: var(--third);

  > option {

  }
`;