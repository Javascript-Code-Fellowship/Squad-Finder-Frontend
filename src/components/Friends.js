import React, { useContext, useState, useEffect } from "react";
import { When } from "react-if";
import { Link } from "react-router-dom";
import { Card, Image } from "react-bootstrap";
import axios from "axios";

import { LoginContext } from "../context/LoginContext";

import david from "../assets/David.png";
import gina from "../assets/Gina.png";
import jaya from "../assets/Jaya.png";

//make API call to get friends list
//map to component
//assuming profile images from backend

const images = [jaya, david, gina];

function Friends() {
  const [friends, setFriends] = useState([]);
  const loginContext = useContext(LoginContext);

  useEffect(() => {
    async function getFriends() {
      const config = {
        method: "get",
        url: `https://squadfinderapp.herokuapp.com/friends`,
        headers: { authorization: `Bearer ${loginContext.user.token}` },
      };
      let results = await axios(config);
      setFriends(results.data);
    }
    getFriends();
  }, []);

  return (
    <When condition={loginContext.isLoggedIn}>
      <Card className="friends" fluid>
        <Card.Title>
          <Link to="/friendRequests">Friends</Link>
        </Card.Title>
        <div className="friends-list">
          {friends.map((friend, idx) => (
            <Link to={`/profile/${friend?.UserId}`}>
              <Image src={images[idx]} roundedCircle />
            </Link>
          ))}
        </div>
      </Card>
    </When>
  );
}

export default Friends;
