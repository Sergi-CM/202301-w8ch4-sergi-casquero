import styled from "styled-components";

const KeyStyled = styled.button`
  button {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 24px;
    width: 65px;
    height: 65px;
    border: 0px;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      transition: 0.1s ease;
      color: white;
      box-shadow: #2b2b2b 3px 3px 10px;
      background-color: rgba(37, 37, 37, 0.45);
      border: 1px solid goldenrod;
    }
  }

  .equals {
    height: 135px;
    background-color: goldenrod;
  }

  .gray {
    background-color: rgba(80, 80, 80, 0.3);
  }

  .zero {
    width: 135px;
  }
`;

export default KeyStyled;
