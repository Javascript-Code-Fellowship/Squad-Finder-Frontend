import React from 'react';
import { Case, Default, Switch, When } from 'react-if';
import { Button, Card } from 'react-bootstrap';

import ProfilePhoto from '../assets/Jess.png';

let placeholder = "profile";
let online = true;

function User() {
  return (
    <Card>
      <Card.Title>@USERNAME</Card.Title>
      <Card.Img variant="bottom" src={ProfilePhoto} roundedCircle/>
      <When condition={online}>
        <div className="online">
          <span className="online-icon"> </span>
          <p>ONLINE</p>
        </div>
      </When>
      <Switch>
        <Case condition={placeholder === "myProfile"}>
          <Button>Edit Profile</Button>
        </Case>
        <Case condition={placeholder === "profile"}>
          <div>
            <Button>Add Friend</Button>
            <Button>Remove Friend</Button>
          </div>
        </Case>
        <Default>
          <div>
            <Button>My Squads</Button>
            <Button>My Games</Button>
          </div>
        </Default>
      </Switch>
    </Card>
  );
}

export default User;
