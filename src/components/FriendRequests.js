import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import User from "./User";
import axios from "axios";
import { LoginContext } from "../context/LoginContext";

const friends = [1, 2, 3, 4];
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
      <Container>
        <Row>
          {requests.map((item) => (
            <Col lg="4" xs="12" md="6">
              <User
                placeholder="request"
                acceptRequest={acceptRequest}
                rejectRequest={rejectRequest}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default FriendRequests;
