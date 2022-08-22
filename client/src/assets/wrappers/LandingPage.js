import styled from "styled-components";

const Wrapper = styled.main`
  display: grid;
  align-items: center;
  .col:first-of-type {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  h1 {
    font-family: "Rubik", sans-serif;
    font-weight: 700;
    span {
      color: #E07A5F;
    }
  }
  p {
    font-size: larger;
  }
  .orangeButton {
    color: white;
  }
  @media (max-width: 992px) {
    .col:nth-of-type(2) {
      display: none;
    }
  }
`;
export default Wrapper;
