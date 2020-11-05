import styled from "styled-components";
import logonew from "../images/logonew.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  font-size: 1.5rem;
  /* align-items: center; */
`;

const LogoImg = styled.img`
  width: 300px;
`;
const LogoContainer = styled.div`
    align-self: center;
`

const Logo = () => {
  return (
    <LogoContainer>
      <LogoImg src={logonew} alt="future modern logo"></LogoImg>
    </LogoContainer>
  );
};

const Intro = () => {
  return (
    <Container>
      <Logo></Logo>
      <p>
        we're the first cross-sector, high-tech worker co-op network based in
        the US.
      </p>
      <p>we develop and promote innovation in the interest of society.</p>
      <p>
        our vision is a global, distributed, autonomus launchpad for ideas
        across industries and disciplines that help bring freedom and prosperity
        to all people.
      </p>
    </Container>
  );
};

export default Intro;
