import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Case, Switch, When } from "react-if";
import { Col, Container, Image, Row } from "react-bootstrap";

import User from "../components/User";
import Friends from "../components/Friends";

import { LoginContext } from "../context/LoginContext";

import squadImg from "../assets/potato.jpg";
import Apex from "../assets/apex.jpg";
import Fortnite from "../assets/Fortnite.jpg";
import Mario from "../assets/mario.jpg";

function Profile(props) {

  const loginContext = useContext(LoginContext);
  const location = useLocation();
  const { id } = useParams();

  const [profile, setProfile] = useState(null);

  async function viewProfile() {
    if (loginContext.isLoggedIn) {
      const config = {
        method: "get",
        url: `https://squadfinderapp.herokuapp.com/profile/${id}`,
        headers: { authorization: `Bearer ${loginContext.user.token}` },
      };

      let response = await axios(config);
      setProfile(response.data);
      console.log("Response from User.js", response.data);
    }
  }

  useEffect(() => {
    viewProfile();
  }, [id]);

  //the second when condition isn't working yet because the profile isn't being saved to the API
  return (
    <When condition={loginContext.isLoggedIn}>
      {console.log("profile path: ", location.pathname)}
      <Container className="profile" fluid>
        <Row>
          <Col xs={12} lg={4}>
            <User profile={profile} />
            <Friends />
          </Col>
          <Col className="about" xs={12} lg={8}>
            <article>
              <h2>ABOUT ME:</h2>
              <p>{profile ? profile.bio : ""}</p>
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
  );
}

export default Profile;
