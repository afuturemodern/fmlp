import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header.js";
import Footer from "./components/shared/Footer.js";

import HomePage from "./pages/HomePage.js";
import MissionPage from "./pages/MissionPage.js";
import MembersPage from "./pages/MembersPage.js";
import ProjectsPage from "./pages/ProjectsPage.js";
import TermsPage from "./pages/TermsPage.js";
import BuyPage from "./pages/BuyPage";
import PrivacyPage from "./pages/PrivacyPage.js";

const Main = styled.main`
  flex-grow: 1;
  background-color: #ffffff77;
`;

function App() {
  return (
    <Router>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/fmlp">
            <HomePage />
          </Route>
          <Route exact path="/fmlp/mission">
            <MissionPage />
          </Route>
          <Route exact path="/fmlp/members">
            <MembersPage />
          </Route>
          <Route exact path="/fmlp/projects">
            <ProjectsPage />
          </Route>
          <Route exact path="/fmlp/buy">
            <BuyPage />
          </Route>
          <Route exact path="/fmlp/terms">
            <TermsPage />
          </Route>
          <Route exact path="/fmlp/privacy">
            <PrivacyPage />
          </Route>
        </Switch>
      </Main>
      <Footer />
    </Router>
  );
}

export default App;
