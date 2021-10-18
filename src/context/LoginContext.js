import React, { useState } from "react";
import axios from "axios";
import base64 from "base-64";

export const LoginContext = React.createContext();

function Login(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [show, setShow] = useState(false);

  function logout() {
    setUser({});
    setIsLoggedIn(false);
  }

  async function signIn(e) {
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
    setUser(results.data);
    setIsLoggedIn(true);
    console.log('sign in', results.data);
  }

  async function signUp(e) {
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
    setUser(results.data);
    setIsLoggedIn(true);
    console.log('sign up', results.data);
  }

  const context = {
    user,
    isLoggedIn,
    show,
    setIsLoggedIn,
    setUser,
    logout,
    setShow,
    signIn,
    signUp
  };

  return (
    <LoginContext.Provider value={context}>
      {props.children}
    </LoginContext.Provider>
  );
}

export default Login;
