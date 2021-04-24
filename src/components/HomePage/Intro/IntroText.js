import styled from "styled-components";

const IntroParagraph = styled.p`
  display: flex;
  margin: var(--space-small) auto;
  text-align: center;
  justify-content: center;
  width: 60vw;
  font-weight: bold;
  font-size:  1.5rem;
  margin-bottom: -.5rem;
  padding-bottom: .5rem;
`;



const IntroText = ({p1, p2}) => {
  return (
    <>
      <IntroParagraph>
        {p1}
        {/* we are future modern, a tech startup done differently. */}
      </IntroParagraph>
      <IntroParagraph>
        {/* we exist to generate wealth for our community, not corporate
        shareholders. */}

        {p2}
      </IntroParagraph>
      {/* <IntroParagraph>
        future modern is owned by its workers and ruled by artists. we unlock
        the economic potential of undervalued communities by backing each
        other’s ideas for a better world, so we never need to sell them out to
        the powers that shouldn’t be.{" "}
      </IntroParagraph>
      <IntroParagraph>what’s happening now?</IntroParagraph> */}
    </>
  );
};

export default IntroText;
