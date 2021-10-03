import styled from 'styled-components';
import PrivacyPolicy from '../components/PrivacyPage/PrivacyPolicy.jsx';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--space-large);
  /* background-color: #ffffffaa; */
`;

function PrivacyPage() {
  return (
    <Container>
      <PrivacyPolicy />
    </Container>
  );
}

export default PrivacyPage;
