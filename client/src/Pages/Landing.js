import React from "react";
import main from "../assets/images/landing.svg";
import Wrapper from "../assets/wrappers/LandingPage";
//Every time we'll set up component , import wrapper from folder.
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Landing = () => {
  return (
    <Wrapper className="full-page">
        {/*info */}
        <Container>
          <Row>
          <Col>
          <h1>
            Book<span> App </span>
          </h1>
          <p>
            Book app is an app where people save the books they read. Thanks to
            this application where they can see their book readings.
            Retrospectively, people can track their progress. Come on, Enjoy the
            app by registering!
          </p>
          <Link to="/register" className="btn orangeButton">
            Login/Register
          </Link>
          </Col>
            <Col>
        <img src={main} alt="books" className="img main-img" />
        </Col>
        </Row>
        </Container>
    </Wrapper>
  );
};

export default Landing;
