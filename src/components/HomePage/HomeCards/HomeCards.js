import styled from "styled-components";
import cardsData from "./cardsData.js";
import HomeCard from "./Card.js";

const Container = styled.div`
  display: grid;
  // width: 95vw;
  grid-template-columns: repeat(auto-fit, minmax(250px, 2fr));
   grid-gap: 1.5rem;
  margin: 0 var(--space-medium);
  // margin: 10px auto;
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
