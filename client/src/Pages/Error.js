import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () => {
  return (
    <Wrapper className="full-page">
        <Link to="/">BACK HOME</Link>
    </Wrapper>
  );
};

export default Error;
