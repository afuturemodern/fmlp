import styled from 'styled-components';

import Divider from '../components/Divider/Divider.js';
import Aeria from '../components/ProjectsPage/Aeria.js';
import Estate from '../components/ProjectsPage/Estate.js';
import Artel from '../components/ProjectsPage/Artel.js';
import TermsOfService from '../components/TermsPage/TermsOfService.jsx';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--space-large);
  /* background-color: #ffffffaa; */
`;

function ProjectsPage() {
  return (
    <Container>
      <TermsOfService />
    </Container>
  );
}

export default ProjectsPage;
