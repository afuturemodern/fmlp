import styled from "styled-components";

const Container = styled.div`
  border: var(--space-medium) solid white;
  border-radius: var(--space-medium);
  background-color: white;
  box-shadow: 2px 3px 10px 1px #ddd;
  margin-bottom: var(--space-large);
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
  object-fit: cover;
`;

const TextBody = styled.div`
  padding: var(--space-small);
  background: #224852;
  color: white;
  display: flex;
  flex-flow: column;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Description = styled.div`
  flex-grow: 1;
`;

const LogoByline = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
`;

const LogoSymbol = styled.img`
  height: 50px;
  padding-right: var(--space-tiny);
`;

const Byline = styled.p`
  font-size: 0.8rem;
`;

function HomeCard({
  card: { img, byline, desc: Desc, description, logo, id },
}) {
  return (
    <Container>
      <Content>
        <CardImg src={img} alt={byline} />
        <TextBody>
          <Description>
            <Desc />
          </Description>
          <LogoByline>
            <LogoSymbol src={logo} alt={`logo${id}`} />
            <Byline>{byline}</Byline>
          </LogoByline>
        </TextBody>
      </Content>
    </Container>
  );
}

export default HomeCard;
