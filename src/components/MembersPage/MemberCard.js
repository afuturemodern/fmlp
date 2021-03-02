import styled from "styled-components";

const Container = styled.div`
  border: var(--space-medium) solid white;
  border-radius: var(--space-medium);
  background-color: white;
  box-shadow: 2px 3px 10px 1px #ddd;
  margin-bottom: var(--space-large);
`;

const ProfilePic = styled.img`
  height: 250px;
  width: 100%;
  object-fit: cover;
  border-top-left-radius: var(--space-small);
  border-top-right-radius: var(--space-small);
`;

const TextContainer = styled.div`
  padding: var(--space-small);
  background-color: #3e54b2;
  border-bottom-left-radius: var(--space-small);
  border-bottom-right-radius: var(--space-small);
  p {
    color: white;
  }
`;

const MemberCard = ({ member }) => {
  return (
    <Container>
      <ProfilePic src={member.img} />
      <TextContainer>
        <p>{member.name}</p>
        <p>{member.title}</p>
      </TextContainer>
    </Container>
  );
};

export default MemberCard;
