import React, { useContext, useState, useEffect } from "react";
import { When } from "react-if";
import { Link } from "react-router-dom";
import { Card, Image } from "react-bootstrap";
import axios from "axios";
import ProfilePhotos from "../assets/profileImageList";

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

  function findPhoto(name) {
    const image = ProfilePhotos.filter((image) => name === image.name);
    console.log(image[0].image);
    return image[0].image;
  }

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
          <Link to="/friendRequests">VIEW ALL FRIENDS</Link>
        </Card.Title>
        <div className="friends-list">
          {friends.map((friend, idx) => (
            <div>
              <Link to={`/profile/${friend?.UserId}`}>
                <Image src={findPhoto(friend.username)} roundedCircle />
              </Link>
              <h3>{friend.username}</h3>
            </div>
          ))}
        </div>
      </Card>
    </When>
  );
}

export default Friends;
