import React, { useEffect, useState, useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import User from "./User";
import axios from "axios";
import { LoginContext } from "../context/LoginContext";
import Friends from "./Friends";

const dummyrequests = ["a", "b", "c", "d"];

function FriendRequests() {
  const [requests, setRequests] = useState([]);
  const loginContext = useContext(LoginContext);
  async function getRequests() {
    const config = {
      method: "get",
      url: `https://squadfinderapp.herokuapp.com/friendRequests`,
      headers: { authorization: `Bearer ${loginContext.user.token}` },
    };
    let results = await axios(config);
    setRequests(results.data);
  }

  useEffect(() => {
    getRequests();
  }, []);

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
                <User profile={item} getRequests={getRequests} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FriendRequests;
