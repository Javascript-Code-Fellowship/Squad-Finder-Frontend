import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "../components/User";
import { Col, Container, Row } from "react-bootstrap";

//dummy data to display multipe profiles
let cols = [1, 2, 3, 4, 5, 6];

function Search() {
  const [users, setUsers] = useState([]);

  // async function getUsers() {
  //   let results = await axios.get(`https://squadfinderapp.herokuapp.com/users`);
  //   return results.data;
  // }

  useEffect(() => {
    setUsers();
  }, []);

  return (
    <Container>
      <Row>
        {cols.map((col) => (
          <Col lg="4" xs="12" md="6">
            <User placeholder="profile" />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Search;
