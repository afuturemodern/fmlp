import styled from "styled-components";
import krusty from "../images/krustyart.png";

const Krusty = styled.img`
  /* position: absolute; */
  /* top: 6rem;
  right: 3rem;
  z-index: -999; */
`;

const ArtContainer = styled.div`

`

const Art = () => {
  // export a component with the artwork situated properly

  return (
    <ArtContainer>
      <Krusty src={krusty} />
    </ArtContainer>
  );
};

export default Art;
