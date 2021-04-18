import {useState, useEffect} from 'react'
import styled from "styled-components";

const IntroArtContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
// position: relative;
// width: 30.308rem;
vertical-align: middle;
flex-wrap: wrap;
width: 80vw;

margin: 10px 0;
// left: 398px;
// top: 766px;

background: #D4DCFB;
border-radius: 36px;
padding 1rem;
`


const IntroArt = ({images}) => {
  const displayImages = images.map(image => <img className={'displayImages'} key={image.alt} src={image.src} alt={image.alt} style={{ height: '8rem' }}/>)
  return (
  <IntroArtContainer>
    {/* <img src={mandem} alt="mandem"/>
    <img src={natekodi} alt="natekodi"/>
    <img src={krusty} alt="krusty"/>
    <img src={verbs} alt="verbs"/>
    <img src={meltingInLava} alt="meltinginlava"/>
    <img src={bigBabyGhandi} alt="big baby gandhi"/> */}
    {displayImages}
    </IntroArtContainer>
  )
};

export default IntroArt;
