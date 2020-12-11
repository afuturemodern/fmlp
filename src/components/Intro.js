import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  font-size: 1.5rem;
`;

const Intro = () => {
  return (
    <Container>
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
