import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import User from "./User";
import axios from "axios";
import { LoginContext } from "../context/LoginContext";
import Friends from "./Friends";

const requests = ["a", "b", "c", "d"];

function FriendRequests() {
  //still needs to hide or remove the request. Probably could be solved with integration with the API and triggering a refresh of the DB pull or requests as the API does remove the request.
  //will probably have to make these function async
  //would this be better on a context?
  function acceptRequest(id) {
    // const config = {
    //   method: "post",
    //   url: `https://squadfinderapp.herokuapp.com/friends/${id}`,
    //   headers: { authorization: `Bearer ${LoginContext.user.token}` },
    // };
    // axios(config);
    console.log("accept");
  }

  function rejectRequest(id) {
    // const config = {
    //   method: "reject",
    //   url: `https://squadfinderapp.herokuapp.com/friendRequests/${id}`,
    //   headers: { authorization: `Bearer ${LoginContext.user.token}` },
    // };
    // axios(config);
    console.log("reject");
  }
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
                  acceptRequest={acceptRequest}
                  rejectRequest={rejectRequest}
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
