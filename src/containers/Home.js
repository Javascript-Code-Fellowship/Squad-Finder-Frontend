import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { When } from "react-if";
import { LoginContext } from "../context/LoginContext";

import User from "../components/User";
import Feed from "../components/Feed";
import Friends from "../components/Friends";

function Home() {
  const loginContext = useContext(LoginContext);

  return (
    <div>
      <Container fluid>
        <Row>
          <When condition={loginContext.isLoggedIn}>
            <Col xs={12} lg={4}>
              <User profile={loginContext.user.user} />
              <Friends />
            </Col>
          </When>
          <Col xs={12} lg={loginContext.isLoggedIn ? 8 : 12}>
            <Feed />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
