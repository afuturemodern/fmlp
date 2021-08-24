import styled from 'styled-components';
import BuyForm from '../components/BuyPage/BuyForm.js';
import Heading from '../components/shared/Heading.js';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--space-large);
`;

function BuyPage() {
  return (
    <Container>
      <Heading>buy BU1DL tokens</Heading>
      <BuyForm />
    </Container>
  );
}

export default BuyPage;
