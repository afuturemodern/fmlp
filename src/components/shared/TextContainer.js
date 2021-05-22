import styled from 'styled-components';
const Container = styled.div`
  // background-color: #ffffffaa;
  color: var(--text-color);
  padding: 0 var(--space-medium);
  word-wrap: break-word;
  width: 100%;
`;

export default function TextContainer({ children }) {
  return <Container>{children}</Container>;
}
