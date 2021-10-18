import React, { useState } from "react";

export const LoginContext = React.createContext();

function Login(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  function logout() {
    setUser({});
    setIsLoggedIn(false);
  }

  const context = {
    user,
    isLoggedIn,
    setIsLoggedIn,
    setUser,
    logout,
  };

  return (
    <LoginContext.Provider value={context}>
      {props.children}
    </LoginContext.Provider>
  );
}

export default Login;
