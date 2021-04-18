import styled from "styled-components";

import IntroText from "./IntroText.js";
import IntroArt from "./IntroArt.js";
import { ImageTextDivider } from "../../ImageTextDivider/imageTextDivider.jsx";
import { firstSectionImages, firstSectionParagraphs, secondSectionImages, secondSectionParagraphs } from './introData.js'




const IntroContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  background-color: #ffffffaa;
  color: var(--text-color);
  // padding: var(--space-medium);
`;



const Intro = () => {
  return (
    <IntroContainer>
    {/* //   <IntroText />
    //   <IntroArt /> */}
    <ImageTextDivider paragraphs={2} thereAreImages paragraphText={firstSectionParagraphs} images={firstSectionImages}/>
    <ImageTextDivider paragraphs={1} thereAreImages paragraphText={secondSectionParagraphs} images={secondSectionImages}/>
    </IntroContainer>
  );
};

export default Intro;
