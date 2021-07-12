import styled from "styled-components";

interface AloneInputProps {
  changeWidth?: boolean
}

export const Container = styled.div`
  padding-top: 70px;

  [type=radio] { 
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  [type=radio] + img {
    cursor: pointer;
  }

  [type=radio]:checked + img {
    background-color: #f5f5f5;
    border-radius: 5px;
  }

  img {
    width: 50px;
  }
`; 

  export const FormStyles = styled.form`
    background-color: rgb(105,75,60, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
    min-height: 130px;
    font-family: var(--font-family-third);
    color: var(--third);
  `;

    export const PetsIcon = styled.div`
      color: black;
      padding: 20px 0 10px;
      display: flex;
      gap: 20px;

      > input { 
        background-color: rgb(105,75,60, 0);
        width: 30px;
        height: 30px;
      }
    `;

    export const RestForm = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 10px;

      max-width: 500px;

      > button {
        max-width: 450px; 
        min-width: 250px
      }
    `;

      export const AloneInput = styled.input<AloneInputProps>`
        width: 200px;
        height: 50px;
        padding-left: 10px;
        border-radius: 10px;
        border: none;
        margin-top: 40px;
      `;

  export const ContainerCards = styled.div`
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    max-width: 1500px;

    @media (min-width: 768px) {
      gap: 50px;
    }
  `;