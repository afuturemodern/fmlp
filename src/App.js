import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header.js';
import Footer from './components/shared/Footer.js';

import HomePage from './pages/HomePage.js';
import MissionPage from './pages/MissionPage.js';
import MembersPage from './pages/MembersPage.js';
import ProjectsPage from './pages/ProjectsPage.js';
import BuyPage from './pages/BuyPage.js';

const Main = styled.main`
  flex-grow: 1;
`;

function App() {
  return (
    <Router>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/mission">
            <MissionPage />
          </Route>
          <Route exact path="/members">
            <MembersPage />
          </Route>
          <Route exact path="/projects">
            <ProjectsPage />
          </Route>
          <Route exact path="/buy">
            <BuyPage />
          </Route>
        </Switch>
      </Main>
      <Footer />
    </Router>
  );
}

export default App;
