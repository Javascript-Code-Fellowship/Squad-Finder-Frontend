import React from 'react';
import { When } from "react-if";
import { Button, Card } from 'react-bootstrap';

import ProfilePhoto from '../assets/Jess.png';

let admin = true;

function Member() {
  return (
    <Card fluid>
      <Card.Img variant="top" src={ProfilePhoto} roundedCircle/>
      <Card.Title>@USERNAME</Card.Title>
      <When condition={admin}>
        <Button>Remove Memmber</Button>
      </When>
    </Card>
  );
}

export default Member;
