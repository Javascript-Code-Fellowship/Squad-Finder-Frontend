import React from "react";
import { When } from "react-if";
import { Button, Card } from "react-bootstrap";
import Jess from "../assets/Jess.png";
import David from "../assets/David.png";
import Gina from "../assets/Gina.png";
import Jaya from "../assets/Jaya.png";
import Rachael from "../assets/Rachel.png";

const pics = { Jess, David, Gina, Jaya, Rachael };
// let admin = true;

function Member(props) {
  console.log(props);
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
