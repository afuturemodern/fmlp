import styled from "styled-components";

import IntroText from "./IntroText.js";
import IntroArt from "./IntroArt.js";

const IntroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: white;
  color: var(--text-color);
  padding: var(--space-medium);
`;

const Intro = () => {
  return (
    <IntroContainer>
      <IntroText />
      <IntroArt />
    </IntroContainer>
  );
};

export default Intro;
