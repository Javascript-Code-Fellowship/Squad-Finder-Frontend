import React from "react";
import { When } from "react-if";
import { Button, Card } from "react-bootstrap";
import ProfilePhoto1 from "../assets/Jess.png";
import ProfilePhoto2 from "../assets/David.png";
import ProfilePhoto3 from "../assets/Gina.png";
import ProfilePhoto4 from "../assets/Jaya.png";
import ProfilePhoto5 from "../assets/Rachel.png";

const pics = [
  ProfilePhoto1,
  ProfilePhoto2,
  ProfilePhoto3,
  ProfilePhoto4,
  ProfilePhoto5,
];
// let admin = true;

function Member(props) {
  return (
    <Card fluid>
      <Card.Img variant="top" src={pics[props.profilePhoto]} roundedCircle />
      <Card.Title>@{props.name}</Card.Title>
      {/* <When condition={admin}>
        <Button>Remove Memmber</Button>
      </When> */}
    </Card>
  );
}

export default Member;
