import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/app.scss";

import Search from "./containers/Search";
import Profile from "./containers/Profile";
import ProfileCreate from "./containers/ProfileCreate";
import Squad from "./containers/Squad";
import Footer from "./components/Footer";
import LoginContext from "./context/LoginContext";
import Header from "./components/Header";
import SquadsContext from "./context/SquadsContext";
import FriendRequests from "./components/FriendRequests";
import Home from "./containers/Home";

function App() {
  return (
    <>
      <LoginContext>
        <SquadsContext>
          <Router>
            <Header />
            <Switch>
              <Route path="/profileCreate" exact>
                <ProfileCreate />
              </Route>
              <Route path="/profile" exact>
                <Profile />
              </Route>
              <Route path="/profile/:id">
                <Profile />
              </Route>
              <Route path="/search" exact>
                <Search />
              </Route>
              <Route path="/squad" exact>
                <Squad />
              </Route>
              <Route path="/friendRequests" exact>
                <FriendRequests />
              </Route>
              <Route path="/" exact>
                <Home />
              </Route>
            </Switch>
            <Footer />
          </Router>
        </SquadsContext>
      </LoginContext>
    </>
  );
}

export default App;
