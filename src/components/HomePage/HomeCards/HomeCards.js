import styled from 'styled-components';
import cardsData from './cardsData.js';
import HomeCard from './Card.js';

const Container = styled.div`
  display: grid;
  width: 80vw;
  grid-template-columns: repeat(auto-fit, minmax(250px, 2fr));
  grid-gap: 3rem;
  margin: 0 0vw 0 10vw;
  // margin: 10px auto;
`;

const HomeCards = () => {
  return (
    <Container>
      {cardsData.map((c, i) => {
        if (i === 2) {
          return <HomeCard key={c.id} card={c} />;
        }
        return <HomeCard key={c.id} card={c} hasLogoSymbol />;
      })}
    </Container>
  );
};

export default HomeCards;
