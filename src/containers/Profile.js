import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import User from "../components/User";

import squadImg from "../assets/potato.jpg";
import Apex from "../assets/apex.jpg";
import Fortnite from "../assets/fortnite.jpg";
import Mario from "../assets/mario.jpg";

function Profile() {
  return (
    <Container className="profile" fluid>
      <Row>
        <Col xs={12} lg={4}>
          <User placeholder="myProfile" />
        </Col>
        <Col className="about" xs={12} lg={8}>
          <article>
            <h2>ABOUT ME:</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              ac massa vulputate orci tempus posuere et sit amet purus.
              Curabitur vulputate felis quis eleifend interdum. Duis accumsan eu
              odio in tincidunt. Aliquam sit amet euismod magna. Ut ut tincidunt
              magna, sit amet tristique odio. Duis tempor, est quis ultricies
              cursus, ex lorem dignissim quam, vitae viverra tortor magna vitae
              lectus. Sed sit amet sollicitudin magna, vel dignissim ante.{" "}
            </p>
          </article>
          <article className="squads-carosel">
            <h2>MY SQUADS</h2>
            <Image src={squadImg} roundedCircle fluid />
          </article>
          <article>
            <h2>MY FAVORITES</h2>
            <div className="games">
              <Image src={Apex} rounded />
              <Image src={Fortnite} rounded />
              <Image src={Mario} rounded />
            </div>
          </article>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
