import React, { useEffect, useContext, useState } from "react";
import { Case, Default, Switch, When } from "react-if";
import { Link, useLocation, useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import axios from "axios";

import ProfilePhoto from "../assets/Jess.png";
import { LoginContext } from "../context/LoginContext";

let online = true;

function User(props) {

  const loginContext = useContext(LoginContext);
  const location = useLocation();
  const { id } = useParams();

  const [friends, setFriends] = useState([]);

  async function addFriend() {
    console.log("added");
    const config = {
      method: "post",
      url: `https://squadfinderapp.herokuapp.com/friendRequests/${id}`,
      headers: { authorization: `Bearer ${loginContext.user.token}` },
    };

    let response = await axios(config);
    console.log(response);
  }
  async function blockFriend(id) {
    console.log("blocked");
    // const config = {
    //   method: "delete",
    //   url: `https://squadfinderapp.herokuapp.com/blockFriend/${id}`,
    //   headers: { authorization: `Bearer ${LoginContext.user.token}` },
    // };
    // await axios(config);
  }

  //still needs to hide or remove the request. Probably could be solved with integration with the API and triggering a refresh of the DB pull or requests as the API does remove the request.
  //will probably have to make these function async
  function acceptRequest(id) {
    // const config = {
    //   method: "post",
    //   url: `https://squadfinderapp.herokuapp.com/friends/${id}`,
    //   headers: { authorization: `Bearer ${LoginContext.user.token}` },
    // };
    // axios(config);
    console.log("accept");
  }

  function rejectRequest(id) {
    // const config = {
    //   method: "reject",
    //   url: `https://squadfinderapp.herokuapp.com/friendRequests/${id}`,
    //   headers: { authorization: `Bearer ${LoginContext.user.token}` },
    // };
    // axios(config);
    console.log("reject");
  }

  async function getFriends() {
    if (loginContext.isLoggedIn) {
      const config = {
        method: "get",
        url: `https://squadfinderapp.herokuapp.com/friends`,
        headers: { authorization: `Bearer ${loginContext.user.token}` },
      };

      let response = await axios(config);
      setFriends(response.data);
      console.log("Friends response: ", response.data);
    }
  }

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <When condition={loginContext.isLoggedIn}>
      <Card className="user" fluid>
        <Card.Title>
          @{props.profile ? props.profile.username.toUpperCase() : ""}
        </Card.Title>
        <Card.Img variant="bottom" src={ProfilePhoto} roundedCircle />
        <When condition={online}>
          <div className="online">
            <span className="online-icon"> </span>
            <p>ONLINE</p>
          </div>
        </When>
        <Switch>
          <Case condition={location.pathname === `/profile/${loginContext?.user?.user?.id}`}>
            <Button>Edit Profile</Button>
          </Case>
          <Case condition={location.pathname === `/profile/${props.profile?.UserId}`}>
            <div>
              <When condition={!friends.includes(props.profile)}>
                <Button onClick={() => addFriend()}>
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
              </When>
              <Button onClick={() => blockFriend()}>
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
          <Case condition={location.pathname === "/search"}>
            <Link to={`/profile/${props.profile ? props.profile.UserId : ' '}`}>
              <Button>Profile</Button>
            </Link>
          </Case>
          <Case condition={location.pathname === "/friendRequests"}>
            <Button onClick={acceptRequest}>Accept</Button>
            <Button onClick={rejectRequest}>Reject</Button>
          </Case>
          <Default>
            <div>
              <Button>My Squads</Button>
              <Button>My Games</Button>
            </div>
          </Default>
        </Switch>
      </Card>
    </When>
  );
}

export default User;
