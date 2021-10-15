import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import User from '../components/User';
import Feed from '../components/Feed';

function Home() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} lg={6}>
            <User />
          </Col>
          <Col xs={12} lg={6}>
            <Feed />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home


