import styled from "styled-components";

import Intro from "../components/HomePage/Intro/Intro.js";
import Divider from "../components/Divider/Divider.js";
import HomeCards from "../components/HomePage/HomeCards/HomeCards.js";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const HomePage = () => {
  return (
    <HomePageContainer>
      <Intro />
      <HomeCards />
      <Divider />
    </HomePageContainer>
  );
};

export default HomePage;
