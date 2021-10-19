import React from 'react';
import { Case, Default, Switch, When } from 'react-if';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

import ProfilePhoto from '../assets/Jess.png';

let placeholder = "profile";
let online = true;

function User() {
  return (
    <Card>
      <Card.Title>@USERNAME</Card.Title>
      <Card.Img variant="bottom" src={ProfilePhoto} />
      <When condition={online}>
        <div className="online"> </div>
        <p>ONLINE</p>
      </When>
      <Switch>
        <Case condition={placeholder === "myProfile"}>
          <Button>Edit Profile</Button>
        </Case>
        <Case condition={placeholder === "profile"}>
          <Button>Add Friend</Button>
          <Button>Remove Friend</Button>
        </Case>
        <Default>
          <Button>My Squads</Button>
          <Button>My Games</Button>
        </Default>
      </Switch>
    </Card>
  );
}

export default User;
