import styled from 'styled-components';
import Paragraph from '../shared/Paragraph';

const StyledParagraph = styled(Paragraph)`
width: 70vw;
max-width: 1200px;
`;

const TermsDisclaimer = () => {
  return (
    <>
      <StyledParagraph>
        By making a transaction you are agreeing to our{' '}
        <a href="/">Terms and conditions</a>
      </StyledParagraph>
    </>
  );
};

export default TermsDisclaimer;
