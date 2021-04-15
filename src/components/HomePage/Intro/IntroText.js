import styled from "styled-components";

const IntroParagraph = styled.p`
  margin: var(--space-small) 0;
  font-weight: bold;
`;

const IntroText = () => {
  return (
    <div>
      <IntroParagraph>
        we are future modern, a tech startup done differently.
      </IntroParagraph>
      <IntroParagraph>
        we exist to generate wealth for our community, not corporate
        shareholders.
      </IntroParagraph>
      <IntroParagraph>
        future modern is owned by its workers and ruled by artists. we unlock
        the economic potential of undervalued communities by backing each
        other’s ideas for a better world, so we never need to sell them out to
        the powers that shouldn’t be.{" "}
      </IntroParagraph>
      <IntroParagraph>what’s happening now?</IntroParagraph>
    </div>
  );
};

export default IntroText;