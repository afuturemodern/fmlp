import styled from "styled-components";
import Ring from "./Ring";
import Triangle from "./Triangle";

const DividerContainer = styled.span`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: var(--space-large) auto;
  cursor: pointer;
  --divider-scale: scale(0.8);
  --triangle-top: 56%;
  --hover-transition: all 0.2s ease;

  :hover {
    --divider-scale: scale(1.2);
    --triangle-top: 66%;
  }
`;

const Tri = styled(Triangle)`
  position: absolute;
  top: var(--triangle-top);
  transition: var(--hover-transition);
  transform: var(--divider-scale);
`;

const StyledRing = styled(Ring)`
  transition: var(--hover-transition);
  transform: var(--divider-scale);
`;

const Divider = () => {
  return (
    <DividerContainer>
      <StyledRing />
      <Tri />
    </DividerContainer>
  );
};

export default Divider;
