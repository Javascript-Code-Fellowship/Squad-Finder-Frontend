import React, { useContext, useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { LoginContext } from '../context/LoginContext';
import { useHistory } from 'react-router-dom';
import logo from '../assets/sf-logo.png';
import { When } from 'react-if';

function SignIn() {
  const history = useHistory();
  const loginContext = useContext(LoginContext);

  const [showSignUpFields, setShowSignUpFields] = useState(true);

  const handleToggle = () => loginContext.setShow(!loginContext.show);

  const handleShowSignUpFields = () => setShowSignUpFields(!showSignUpFields);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    showSignUpFields ? loginContext.signIn(e) : loginContext.signUp(e);
    handleToggle();
    history.push('/profileCreate');
  };

  return (
    <div>
      <Button
        variant="primary"
        onClick={loginContext.isLoggedIn ? loginContext.logout : handleToggle}
      >
        {loginContext.isLoggedIn ? 'Sign Out' : 'Sign In'}
      </Button>

      <Modal show={loginContext.show} onHide={handleToggle}>
        <div className={'logoSpace'}>
          <img src={logo} alt="site logo" />
        </div>
        <Modal.Header closeButton>
          <Modal.Title>
            {showSignUpFields ? 'Sign-In to' : 'Sign-Up for'} Squadfinder
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={(e) => handleFormSubmit(e)}>
          <p onClick={handleShowSignUpFields}>
            {showSignUpFields
              ? 'Not a member? Click here to sign-up.'
              : 'Already a member? Click here to sign-in.'}
          </p>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            hidden={showSignUpFields}
          >
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
            {showSignUpFields ? 'Sign-In' : 'Sign-Up'}
          </Button>
        </Form>
      </Modal>
    </div>
  );
}

export default SignIn;
