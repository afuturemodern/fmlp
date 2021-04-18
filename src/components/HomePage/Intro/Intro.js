import styled from "styled-components";

import IntroText from "./IntroText.js";
import IntroArt from "./IntroArt.js";
import { ImageTextDivider } from "../ImageTextDivider/imageTextDivider.jsx";

import mandem from '../../../images/introArt/mandem.png'
import natekodi from '../../../images/introArt/natekodi.png'
import krusty from '../../../images/introArt/krusty.png'
import verbs from '../../../images/introArt/verbs.png'
import meltingInLava from '../../../images/introArt/meltinglava.png'
import bigBabyGhandi from '../../../images/introArt/big baby gandhi.png'

import auraMoreno from '../../../images/introArt/auramoreno.png'
import jimmy from '../../../images/introArt/jimmy.png'
import bearCap from '../../../images/introArt/bearcap.png'
import paris from '../../../images/introArt/paris.png'




const IntroContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  background-color: #ffffffaa;
  color: var(--text-color);
  // padding: var(--space-medium);
`;

const firstSectionParagraphs = {
  one: 'We are future modern, a tech startup done differently.',
  two: 'We exist to generate wealth for our community, not corporate shareholders.'
}

const secondSectionParagraphs = {
  one: 'future modern is owned by its workers and ruled by artists. we unlock the economic potential of undervalued communities by backing each other’s ideas for a better world, so we never need to sell them out to the powers that shouldn’t be.'
}

const firstSectionImages = [
  {src:mandem, alt: 'Mandem', mobile: 'mobile', },
  {src:natekodi, alt: 'natekodi'},
  {src:krusty, alt: 'Krusty'},
  {src:verbs, alt: 'Verbs'},
  {src:meltingInLava, alt: 'Melting In Lava'},
  {src:bigBabyGhandi, alt: 'Big Baby Ghandi'}
]

const secondSectionImages = [
  {src: auraMoreno, alt: 'Aura Moreno'},
  {src: jimmy, alt: 'Jimmy'},
  {src: bearCap, alt: 'Bearcap'},
  {src: paris, alt: 'Paris'},
]

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
