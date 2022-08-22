import styled from "styled-components";
import img from "../images/error.png";

const Wrapper = styled.main`
  text-align: center;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    font-size: 10rem;
    font-weight: 600;
    text-decoration: none;
    color: transparent;
    background-image: linear-gradient(90deg, rgba(28,121,9,1) 0%,rgba(0,36,31,1) 16.5%,rgba(0,61,255,1) 33%, rgba(0,36,31,1) 50%, rgba(28,121,9,1) 67%, rgba(0,36,31,1) 83.5%, rgba(0,61,255,1) 100%);
    background-size: 300% 100%;
    background-position: center;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
  }
  a:hover {
    animation: gradient 3s ease-out 0s 1 normal forwards;
  }

@keyframes gradient {
    0% {
        background-position: center;
    }
    100% {
        background-position: right;
    }}
`;

export default Wrapper;