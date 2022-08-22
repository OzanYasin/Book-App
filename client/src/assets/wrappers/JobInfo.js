import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .icon {
    font-size: 1rem;
    margin-right: 0.5rem;
    display: flex;
    align-items: center;
    svg {
      color: #829ab1;
    }
  }
  .text {
    text-transform: capitalize;
  }
`
export default Wrapper
