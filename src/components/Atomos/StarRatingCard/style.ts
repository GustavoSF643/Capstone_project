import styled from "styled-components";

export const StarContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 35px 0 0 15px;
  padding-bottom: 8px;

  input[type="radio"] {
    display: none;
  }

  svg {
    margin-left: 5px;
  }

  span {
    cursor: pointer;
  }
`;
