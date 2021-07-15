import styled from "styled-components";

export const StarContainer = styled.div`
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
  color: var(--third);

  input[type="radio"] {
    display: none;
  }

  span {
    cursor: pointer;
  }
`;
