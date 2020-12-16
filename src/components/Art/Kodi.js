import asset3 from "./asset-3.png";
import kodi from "./kodi.gif";
import styled from "styled-components";

const GifContainer = styled.div`
  width: 30%;
  top: 84%;
  left: 18%;
  position: absolute;
  height: 148px;
`;

const KodiGif = styled.img`
  width: 61%;
  position: absolute;
  top: 18%;
  transform: translate(31%);
`;

const Emblem = styled.img`
  position: absolute;
  width: 100%;
`;

const Kodi = () => {
  return (
    <GifContainer>
      <Emblem src={asset3} />
      <KodiGif src={kodi} />
    </GifContainer>
  );
};

export default Kodi;
