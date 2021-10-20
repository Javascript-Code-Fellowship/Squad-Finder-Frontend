import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { LoginContext } from "../context/LoginContext";

import User from '../components/User';
import Feed from '../components/Feed';
import Friends from '../components/Friends';

function Home() {
  const loginContext = useContext(LoginContext);

  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={12} lg={4}>
            <User />
            <Friends />
          </Col>
          <Col xs={12} lg={8}>
            <Feed />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
