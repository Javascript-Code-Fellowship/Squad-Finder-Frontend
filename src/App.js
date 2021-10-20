import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './styles/app.scss';

import Header from './components/Header';

import Search from './containers/Search';
import Profile from './containers/Profile';
import ProfileCreate from './containers/ProfileCreate';
import Squad from './containers/Squad';
import Footer from './components/Footer';
import LoginContext from './context/LoginContext';
import Header from './components/Header';
import SquadsContext from './context/SquadsContext';

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
        </SquadsContext>
      </LoginContext>
    </>
  );
}

export default App;
