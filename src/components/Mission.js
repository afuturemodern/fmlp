import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  line-height: 1.3rem;
  font-size: 1.2rem;
`;

const Heading = styled.h2`
  align-self: center;
  padding: 1rem;
`;

const Mission = () => {
  return (
    <Container>
      <Heading>intro</Heading>
      <p>
        the current system forces social innovators to choose between lacking
        the resources they need to see through their vision, or selling out and
        corrupting their vision for co-opting interests. we need new
        institutions, economies, and networks, across technology, finance,
        power, creativity and information, which reward and liberate those who
        reward and liberate their communities, rather than those than exclude,
        extract from and exploit them.
        <br />
        <br />
        future modern is the interdisciplinary movement of thinkers, doers,
        makers, shakers, artists, technologists, researchers, activists,
        organizers, and entrepreneurs, vanguarding a new paradigm for creativity
        and innovation that rewards liberation and abundance, not exclusion,
        extraction, and exploitation.
        <br />
        <br />
        radical communities, particularly black, brown, feminized, poor and
        working creators, must champion modern advancements like blockchain and
        ai to realize their full revolutionary potential. these communities
        stand to most benefit from new systems of freedom and empowerment, and
        are best positioned to embrace them and spread them to the broader
        culture.
        <br />
        <br />
        our members cut their teeth at such institutions as caltech, uchicago,
        duke, berkeley, usc, ucla, bird rides, microsoft, columbia records, mad
        decent records, complex magazine, blackrock, ontraport, red table talks,
        and the los angeles department of water and power.
      </p>
      <Heading>core pillars</Heading>
      {/* <p>our process loops through the following operations:</p>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p> */}
      <p>
        our process loops through the following operations:
        <br />
        <br />
        • move revolutionary leaders to revolutionary spaces. migrate our
        members off corporate-run platforms, and onto distributed, democratized
        networks. these offer the benefits of fairer pay to creators, censorship
        resistance, and sophisticated funding, monetization and ownership
        capabilities. For example, our musical artists distribute their catalogs
        through decentralized, artist-owned streaming services like Resonate and
        Audius.
        <br />
        <br />
        • bring our communities with us on our journey. invest in research,
        education, and direct action which brings these alternative structures
        to as many people as possible. this looks like live demos, TED-style
        lecture / story series / podcasts, workshops, livestreaming events, and
        more.
        <br />
        <br />• bridge the old and new worlds. develop programs to develop these
        spaces, bringing more contributors and communities to join them, driving
        a virtuous cycle of adoption. as these projects are largely community
        developed and often welcome contributions from outside their core
        developers, our technologists can lead the charge to bring the
        developments our communities need: when systems lack specific functions
        creators need, we will provide technical and product contributions
        toward making those functions available; when the systems don't exist at
        all, we will build our own.
      </p>
    </Container>
  );
};

export default Mission;
