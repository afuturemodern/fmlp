import styled from "styled-components";
import krusty from "./krusty.png";
import muze from "./muze_art.png";
import melting_lava from "./melting_lava.png";
import aliza from "./aliza.png";

import Kodi from "./Kodi";

const Krusty = styled.img`
  width: 28%;
  top: 54%;
  position: absolute;
`;

const Muze = styled.img`
  position: absolute;
  width: 45%;
  left: 22%;
`;

const MeltingLava = styled.img`
  position: absolute;
  width: 30%;
  right: 0%;
  top: 12%;
`;

const Aliza = styled.img`
  position: absolute;
  width: 43%;
  right: 4%;
  top: 54%;
`;

const ArtContainer = styled.div`
  position: relative;
  width: 1072px;
  margin: 2rem;
`;

const Art = () => {
  // export a component with the artwork situated properly

  return (
    <ArtContainer>
      <Muze src={muze} />
      <Krusty src={krusty} />
      <MeltingLava src={melting_lava} />
      <Aliza src={aliza} />
      <Kodi />
    </ArtContainer>
  );
};

export default Art;
