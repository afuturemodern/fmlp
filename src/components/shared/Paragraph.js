import styled from 'styled-components';

const Paragraph = styled.p`
  margin: var(--space-medium) 0;
  width: 45vw;
  // height: 9vh;
  margin: 5vh auto;
  font-size: 1.3rem;
  font-weight: 450;
  @media (max-width: 600px) {
    width: 70vw;
  }
`;

export default Paragraph;
