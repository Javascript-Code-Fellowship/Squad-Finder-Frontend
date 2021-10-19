import React from "react";
import { Case, Default, Switch, When } from "react-if";
import { Button, Card } from "react-bootstrap";

import ProfilePhoto from "../assets/Jess.png";

let placeholder = "myProfile";
let online = true;

function User(props) {
  return (
    <Card className="user" fluid>
      <Card.Title>@USERNAME</Card.Title>
      <Card.Img variant="bottom" src={ProfilePhoto} roundedCircle />
      <When condition={online}>
        <div className="online">
          <span className="online-icon"> </span>
          <p>ONLINE</p>
        </div>
      </When>
      <Switch>
        <Case condition={props.placeholder === "myProfile"}>
          <Button>Edit Profile</Button>
        </Case>
        <Case condition={props.placeholder === "profile"}>
          <div>
            <Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-people-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path
                  fill-rule="evenodd"
                  d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                />
                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
              </svg>
              Add Friend
            </Button>
            <Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-slash-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M11.354 4.646a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 .708.708l6-6a.5.5 0 0 0 0-.708z" />
              </svg>
              Block User
            </Button>
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
