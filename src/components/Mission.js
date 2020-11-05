import logonew from "../images/logonew.png";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  line-height: 1.3rem;
  font-size: 1.2rem;
`;

const Logo = styled.img`
  width: 300px;
  align-self: center;
`;

const Heading = styled.h2`
  align-self: center;
  padding: 1rem;
`;

const Mission = () => {
  return (
    <Container>
      <Logo src={logonew} />
      <Heading>core pillars</Heading>
      <p>our process loops through the following operations:</p>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </Container>
  );
};

export default Mission;
