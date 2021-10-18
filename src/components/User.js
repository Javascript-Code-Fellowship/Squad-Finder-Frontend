import React from 'react';
import { Button, Card } from 'react-bootstrap';

import ProfilePhoto from '../assets/Jess.png';

function User() {
  return (
    <Card>
      <Card.Img variant="top" src={ProfilePhoto} />
      <Card.Title>USER</Card.Title>
      <Button>My Squads</Button>
      <Button>My Games</Button>
      <Button>Edit Profile</Button>
      <Button>Add Friend</Button>
      <Button>Remove Friend</Button>
    </Card>
  );
}

export default User;
