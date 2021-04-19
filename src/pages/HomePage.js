import styled from "styled-components";

import Intro from "../components/HomePage/Intro/Intro.js";
import Divider from "../components/Divider/Divider.js";
import HomeCards from "../components/HomePage/HomeCards/HomeCards.js";
import Logo from "../components/Header/Logo.js";
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
      <PartnersGrid />
    </HomePageContainer>
  );
};

export default HomePage;
