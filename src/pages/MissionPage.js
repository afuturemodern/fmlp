import styled from "styled-components";

import Divider from "../components/Divider/Divider.js";
import MissionIntro from "../components/MissionPage/MissionIntro.js";
import CorePillars from "../components/MissionPage/CorePillars.js";
import LearnMore from "../components/MissionPage/LearnMore.js";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--space-large);
`;

function Mission() {
  return (
    <Container>
      <MissionIntro />
      <Divider />
      <CorePillars />
      <Divider />
      <LearnMore />
    </Container>
  );
}

export default Mission;
