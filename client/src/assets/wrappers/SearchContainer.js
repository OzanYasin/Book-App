import styled from "styled-components";

const Wrapper = styled.section`
border-radius: var(--borderRadius);
width: 100%;
.btn {
  flex-grow: 1;
  padding: 4.5px 12px;
  position: relative;
  top: 8px;
}
.container {
  max-width: none;
}
.buttonContainer {
  display: flex;
  align-items: center;
}
`;

export default Wrapper;
