import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { LoginContext } from "../context/LoginContext";

import User from '../components/User';
import Hero from '../components/Hero';
import Friends from '../components/Friends';
import Articles from '../components/Articles';

function Home() {

  const loginContext = useContext(LoginContext);

  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={12} lg={4}>
            <User profile={loginContext.user.user}/>
            <Friends />
          </Col>
          <Col xs={12} lg={8}>
            <Hero />
            <Articles />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
