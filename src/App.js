import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './styles/app.scss';

import Header from './components/Header';
import Home from './containers/Home';
import Search from './containers/Search';
import Profile from './containers/Profile';
import ProfileCreate from './containers/ProfileCreate';
import Squad from './containers/Squad';
import Footer from './components/Footer';
import LoginContext from './context/LoginContext';

function App() {
  return (
    <>
      <LoginContext>
        <Router>
          <Header />
          <Switch>
            <Route path="/profile" exact>
              <Profile />
            </Route>
            <Route path="/profileCreate" exact>
              <ProfileCreate />
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
          <Footer />
        </Router>
      </LoginContext>
    </>
  );
}

export default App;
