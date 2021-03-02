import styled from "styled-components";
import cardsData from "./cardsData.js";
import HomeCard from "./Card.js";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: var(--space-medium);
  margin: 0 var(--space-medium);
`;

const HomeCards = () => {
  return (
    <Container>
      {cardsData.map((c) => (
        <HomeCard key={c.id} card={c} />
      ))}
    </Container>
  );
};

export default HomeCards;
