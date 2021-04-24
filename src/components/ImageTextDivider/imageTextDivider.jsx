import styled from "styled-components";

import IntroArt from "../HomePage/Intro/IntroArt";
import IntroText from "../HomePage/Intro/IntroText";
import Divider from "../Divider/Divider";

/**
 * ImageTextDivider
 * @description generaes a paragraph or two, an array of images and a divider component
 * @param {number} paragraphs number of paragraphs (1 or 2)
 * @param {boolean} thereAreImages if there are images, display the list, if not don't show them
 * @param {object} paragraphText childern are one and two for first and second paragraph respectively
 * @param {Array} images children are an array of objects with properties src and alt
 * @returns {JSX}  with paragraph text, an array of images and a divider component
 */

const ImageTextDividerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

export const ImageTextDivider = ({
  paragraphs,
  thereAreImages,
  paragraphText,
  images,
}) => {
  if (paragraphs === 2 && thereAreImages) {
    return (
      <ImageTextDividerContainer>
        <IntroText p1={paragraphText.one} p2={paragraphText.two} />
        <IntroArt images={images} />
        <Divider />
      </ImageTextDividerContainer>
    );
  } else if (paragraphs === 1 && thereAreImages) {
    return (
      <ImageTextDividerContainer>
        <IntroText p1={paragraphText.one} p2={null} />
        <IntroArt images={images} />
        <Divider />
      </ImageTextDividerContainer>
    );
  } else
    return (
      <ImageTextDividerContainer>
        <IntroText />
        <Divider />
      </ImageTextDividerContainer>
    );
};
