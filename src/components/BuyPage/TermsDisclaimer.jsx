import styled from 'styled-components';
import Paragraph from '../shared/Paragraph';

const StyledParagraph = styled(Paragraph)`
  width: 70vw;
  max-width: 1200px;
  text-align: center;
`;

const TermsDisclaimer = () => {
  return (
    <>
      <StyledParagraph>
        by making a transaction you are agreeing to our{' '}
        <a target="_blank" rel="noreferrer" href="/terms">
          terms and conditions
        </a>{' '}
        |{' '}
        <a target="_blank" rel="noreferrer" href="/privacy">
          privacy policy
        </a>
      </StyledParagraph>
    </>
  );
};

export default TermsDisclaimer;
