import React, { useContext } from 'react';
import { When } from 'react-if';

import { Card, Image } from 'react-bootstrap';

import { LoginContext } from "../context/LoginContext";

import david from '../assets/David.png';
import gina from '../assets/Gina.png';
import jaya from '../assets/Jaya.png';

//make API call to get friends list
//map to component
//assuming profile images from backend

const dummyFriends = [
  { username: 'Jaya', userImage: jaya },
  { username: 'David', userImage: david },
  { username: 'Gina', userImage: gina },
  { username: 'Gina', userImage: gina },
];

function Friends() {

  const loginContext = useContext(LoginContext);

  return (
    <When condition={loginContext.isLoggedIn}>
      <Card className="friends" fluid>
        <Card.Title>Friends</Card.Title>
        <div className="friends-list">
          {dummyFriends.map((friend) => (
            <Image src={friend.userImage} roundedCircle />
          ))}
        </div>
      </Card>
    </When>
  );
}

export default Friends;
