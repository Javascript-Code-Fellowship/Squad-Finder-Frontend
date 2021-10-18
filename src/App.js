import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/app.scss";

import Header from "./components/Header";
import Home from "./containers/Home";
import Search from "./containers/Search";
import Profile from "./containers/Profile";
import Squad from "./containers/Squad";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import LoginContext from "./context/LoginContext";
import SignIn from "./components/SignIn";

function App() {
  return (
    <>
      <LoginContext>
        <Header />
        <SignUp />
        <SignIn />
        <Router>
          <Switch>
            <Route path="/profile" exact>
              <Profile />
            </Route>
            <Route path="/search" exact>
              <Search />
            </Route>
            <Route path="/squad/:name" exact>
              <Squad />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </LoginContext>
    </>
  );
}

export default App;
