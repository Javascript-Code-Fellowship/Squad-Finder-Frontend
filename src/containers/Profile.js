import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { If, Then, When } from "react-if";
import { Col, Container, Image, Row } from "react-bootstrap";

import User from "../components/User";
import Friends from "../components/Friends";
import gameList from "../assets/gamelist";

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
  const [squads, setSquads] = useState([]);
  const [game, setGame] = useState({});

  async function viewProfile() {
    if (loginContext.isLoggedIn) {
      const config = {
        method: "get",
        url: `https://squadfinderapp.herokuapp.com/profile/${id}`,
        headers: { authorization: `Bearer ${loginContext.user.token}` },
      };

      let response = await axios(config);
      setProfile(response.data);
    }
  }

  async function viewSquads() {
    if (loginContext.isLoggedIn) {
      const config = {
        method: "get",
        url: `https://squadfinderapp.herokuapp.com/squads`,
        headers: { authorization: `Bearer ${loginContext.user.token}` },
      };

      let response = await axios(config);
      setSquads(response.data);
    }
  }

  useEffect(() => {
    viewProfile();
    viewSquads();
    let image = gameList.filter((game) => game.name === profile?.games)[0]
    setGame(image);
  }, [id]);

  //the second when condition isn't working yet because the profile isn't being saved to the API
  return (
    <When condition={loginContext.isLoggedIn}>
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
              <If condition={squads?.squads?.length > 0}>
                <Then>
                  {squads.squads?.map(() => (
                    <Image src={squadImg} roundedCircle fluid />
                  ))}
                </Then>
              </If>
            </article>
            <article>
              <If condition={profile !== null}>
                <Then>
                  <h2>MY FAVORITE GAME</h2>
                  <div className="games">
                    <Image src={game?.image} rounded />
                  </div>
                </Then>
              </If>
            </article>
          </Col>
        </Row>
      </Container>
    </When>
  );
}

export default Profile;
