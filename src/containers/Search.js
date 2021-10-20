import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "../components/User";
import { Col, Container, Row, Form, Button } from "react-bootstrap";

//dummy data to display multipe profiles
let cols = [1, 2, 3, 4, 5, 6, 7];

function Search() {
  const [users, setUsers] = useState([]);
  const [friendSearch, setFriendSearch] = useState([]);

  // async function getUsers() {
  //   let results = await axios.get(`https://squadfinderapp.herokuapp.com/users`);
  //   return results.data;
  // }

  function searchUsers(e) {
    e.preventDefault();
    console.log(e.target.searchUsers.value);
    // setFriendSearch(users.filter((user) => user.name === e.target.searchUsers.value));
  }

  useEffect(() => {
    setUsers();
  }, []);

  return (
    <section>
      <Form className="searchFrom" onSubmit={(e) => searchUsers(e)}>
        <Form.Group className="mb-3 searchUsers" controlId="searchUsers">
          <Form.Control type="text" placeholder="Who are you looking for?" />
        </Form.Group>
      </Form>
      <Container>
        <Row>
          {cols.map((col) => (
            <Col lg="4" xs="12" md="6">
              <User placeholder="search" />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Search;
