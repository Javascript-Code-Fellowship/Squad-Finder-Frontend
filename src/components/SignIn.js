import React, { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import base64 from "base-64";
import { LoginContext } from "../context/LoginContext";

function SignIn() {
  const loginContext = useContext(LoginContext);

  async function handleFormSubmit(e) {
    e.preventDefault();
    let user = {
      username: e.target.formBasicText.value,
      password: e.target.formBasicPassword.value,
    };
    console.log(user);
    let auth = base64.encode(`${user.username}:${user.password}`);
    const config = {
      headers: { authorization: `Basic ${auth}` },
      url: `https://squadfinderapp.herokuapp.com/signin`,
      method: "post",
    };
    let results = await axios(config);
    loginContext.setUser(results.data);
    loginContext.setIsLoggedIn(true);
    console.log(results.data);
  }

  return (
    <div>
      <Form onSubmit={(e) => handleFormSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign in
        </Button>
      </Form>
    </div>
  );
}

export default SignIn;
