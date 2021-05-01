import styled from 'styled-components';

import Divider from '../components/Divider/Divider.js';
import Aeria from '../components/ProjectsPage/Aeria.js';
import Estate from '../components/ProjectsPage/Estate.js';
import Artel from '../components/ProjectsPage/Artel.js';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--space-large);
`;

function ProjectsPage() {
  return (
    <Container>
      <Artel />
      <Divider />
      <Aeria />
      <Divider />
      <Estate />
    </Container>
  );
}

export default ProjectsPage;
