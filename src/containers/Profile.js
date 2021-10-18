import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import User from '../components/User';

function Profile() {
  return (
    <Container>
      <Row>
        <Col xs={12} lg={6}>
          <User />
        </Col>
        <Col xs={12} lg={6}>
          <h2>
            ABOUT ME:
          </h2>
          <h2>
            MY SQUADS
          </h2>
          <h2>
            MY FAVORITES
          </h2>
        </Col>
      </Row>
    </Container>
  )
}

export default Profile
