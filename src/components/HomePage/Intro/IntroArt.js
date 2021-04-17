import styled from "styled-components";

const IntroArtContainer = styled.div`
display: flex;
justify-content: center;
// position: relative;
width: 1124.93px;
height: 30vh;
vertical-align: middle;
margin: 10px auto;
// left: 398px;
// top: 766px;

background: #D4DCFB;
border-radius: 36px;
padding 1rem;
`

const IntroArt = ({images}) => {
  const displayImages = images.map(image => <img key={image.alt} src={image.src} alt={image.alt}/>)
  return <IntroArtContainer>
    {/* <img src={mandem} alt="mandem"/>
    <img src={natekodi} alt="natekodi"/>
    <img src={krusty} alt="krusty"/>
    <img src={verbs} alt="verbs"/>
    <img src={meltingInLava} alt="meltinginlava"/>
    <img src={bigBabyGhandi} alt="big baby gandhi"/> */}
    {displayImages}
  </IntroArtContainer>;
};

export default IntroArt;
