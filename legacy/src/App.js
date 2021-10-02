import styled from 'styled-components';
import Art from './components/Art/Art.js';
import Header from './components/Header';
import Mission from './components/Mission';
import Members from './components/Members';

import Intro from './components/Intro';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Main = styled.div`
  color: white;
  background-color: red;
`;

// const Background = styled.div`
//   background-image: url("./assets/gradient_bg.png");
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   z-index: -1000;
// `;

const Content = styled.div`
  display: flex;
`;

function App() {
  return (
    <Router>
      <Main>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Content>
              <Intro></Intro>
              <Art />
            </Content>
          </Route>
          <Route path="/mission">
            <Mission></Mission>
          </Route>
          <Route path="/members">
            <Members></Members>
          </Route>
        </Switch>
      </Main>
    </Router>
  );
}

export default App;
