import styled from 'styled-components';
import BuyForm from '../components/BuyPage/BuyForm.js';
import ChargeSummaryGrid from '../components/BuyPage/ChargeSummaryGrid.js';
import TermsDisclaimer from '../components/BuyPage/TermsDisclaimer.js';
import Heading from '../components/shared/Heading.js';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function BuyPage() {
  return (
    <Container>
      <Heading>buy BU1DL tokens:</Heading>
      {/* add amount and total compnent */}
      <ChargeSummaryGrid />
      <BuyForm />
      {/* terms of sevice link */}
      <TermsDisclaimer />
    </Container>
  );
}

export default BuyPage;
