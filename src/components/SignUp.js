import React, { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { LoginContext } from "../context/LoginContext";

function SignUp() {
  const loginContext = useContext(LoginContext);

  async function handleFormSubmit(e) {
    e.preventDefault();
    let user = {
      username: e.target.formBasicText.value,
      password: e.target.formBasicPassword.value,
      email: e.target.formBasicEmail.value,
    };
    console.log(user);
    let results = await axios.post(
      `https://squadfinderapp.herokuapp.com/signup`,
      user
    );
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

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign up
        </Button>
      </Form>
    </div>
  );
}

export default SignUp;
