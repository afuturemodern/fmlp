import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  border: 30px solid #366f49;
  border-radius: 76px;
  background-color: #366f49;
  box-shadow: 2px 3px 10px 1px #ddd;
  margin-bottom: var(--space-large);
  margin: 0 auto;
  // width: 25vw;
`;
const Content = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  border-radius: var(--space-small);
  overflow: hidden;
`;

const CardImg = styled.img`
  /* width: 100%; */
  height: 50vh;
  width: 100%;
  object-fit: contain;
`;

const TextBody = styled.div`
  padding: var(--space-small);
  background: #366f49;
  color: white;
  display: flex;
  flex-flow: column;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

// const Description = styled.div`
//   flex-grow: 1;
// `;

const LogoByline = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 13vh;
  width: 250px;
  padding 4vh 0;
  margin: 0 auto;
`;

const LogoSymbol = styled.img`
  height: 50px;
  padding-right: var(--space-tiny);
`;

const Byline = styled.p`
  font-size: 1.125rem;
  color: white;
  font-weight: 700;
`;

function HomeCard({
  card: { img, byline, desc: Desc, description, logo, id, href },
  hasLogoSymbol,
}) {
  return hasLogoSymbol ? (
    <Container>
      <Content>
        <LogoByline>
          <LogoSymbol src={logo} alt={`logo${id}`} />
          <Byline>{byline}</Byline>
        </LogoByline>
        <a href={href}>
          <CardImg src={img} alt={byline} />
        </a>
        <TextBody></TextBody>
      </Content>
    </Container>
  ) : (
    <Container>
      <Content>
        <LogoByline>
          <LogoSymbol
            src={logo}
            alt={`logo${id}`}
            style={{ visibility: 'hidden' }}
          />
          <Byline style={{ marginLeft: '-3.5rem' }}>{byline}</Byline>
        </LogoByline>
        <a href={href}>
          <CardImg src={img} alt={byline} />
        </a>
        <TextBody></TextBody>
      </Content>
    </Container>
  );
}

export default HomeCard;
