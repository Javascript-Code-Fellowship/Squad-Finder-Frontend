import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import User from "./User";
import axios from "axios";
import { LoginContext } from "../context/LoginContext";
import Friends from "./Friends";

const requests = ["a", "b", "c", "d"];

function FriendRequests() {
  
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs="6" lg="4">
            <Friends />
          </Col>
          <Col lg="8" xs="6" className="friendRequests">
            <div className="requests">
              {requests.map((item) => (
                <User
                  placeholder="request"
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FriendRequests;
