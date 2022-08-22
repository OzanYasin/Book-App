import styled from "styled-components";

const Wrapper = styled.article`
margin: 1rem 0;
background-color: white;
padding: 1rem 1.5rem;
box-shadow: var(--shadow-2);
transition: 0.3s ease-in-out all;
text-align: center;
.container {
  flex-direction: column;
}
:hover {
  box-shadow: var(--shadow-4);
}
.row {
  justify-content: center;
}
.status {
  padding: 2px 12px;
  margin-top: 8px;
}
a {
  color: white;
  text-decoration: none;
}
.mt-3 .btn {
  width: 5rem;
}
.read {
  background-color: #5F797B;
  border: none;
}
.finished {
  background-color: #3D405B;
  border: none;
} 
.reading {
  background-color: #F2CC8F;
  border: none;
  color: #2b3058;
}
`;

export default Wrapper;
