import styled from 'styled-components';

import TermsOfService from '../components/TermsPage/TermsOfService.jsx';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--space-large);
  /* background-color: #ffffffaa; */
`;

function TermsPage() {
  return (
    <Container>
      <TermsOfService />
    </Container>
  );
}

export default TermsPage;