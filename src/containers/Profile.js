import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { When } from "react-if";
import { Col, Container, Image, Row } from "react-bootstrap";

import User from "../components/User";
import Friends from "../components/Friends";

import { LoginContext } from "../context/LoginContext";

import squadImg from "../assets/potato.jpg";
import Apex from "../assets/apex.jpg";
import Fortnite from "../assets/fortnite.jpg";
import Mario from "../assets/mario.jpg";



function Profile() {

  const loginContext = useContext(LoginContext);

  const [profile, setProfile] = useState(null);

  async function viewProfile() {
    if (loginContext.isLoggedIn) {
      const config = {
        method: "get",
        url: `https://squadfinderapp.herokuapp.com/profile`,
        headers: { authorization: `Bearer ${loginContext.user.token}`},
      }
  
      let response = await axios(config)
      setProfile(response.data);
      console.log("Response from User.js", response.data);
    }
  }

  useEffect(() => {
    viewProfile();
  }, [loginContext.isLoggedIn])

  return (
    <When condition={loginContext.isLoggedIn}>
      <When condition={profile}>
        <Container className="profile" fluid>
          <Row>
            <Col xs={12} lg={4}>
              <User profile={profile} />
              <Friends />
            </Col>
            <Col className="about" xs={12} lg={8}>
              <article>
                <h2>ABOUT ME:</h2>
                <p>
                  {profile ? profile.bio : ''}
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
      </When>
    </When>
  );
}

export default Profile;
