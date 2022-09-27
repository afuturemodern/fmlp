import styled from "styled-components";

import Intro from "../components/HomePage/Intro/Intro.js";
import Divider from "../components/Divider/Divider.js";
import HomeCards from "../components/HomePage/HomeCards/HomeCards.js";
import H1 from "../components/shared/H1";
import { PartnersGrid } from "../components/HomePage/PartnersGrid/PartnersGrid.jsx";

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
      <H1>partners</H1>
      <PartnersGrid />
    </HomePageContainer>
  );
};

export default HomePage;
