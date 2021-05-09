import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';

const CardContainer = styled.div`
  height: 100%;
  width: 18rem;
  border: var(--space-medium) solid ${(props) => props.backgroundColor};
  border-radius: var(--space-medium);
  box-shadow: 2px 3px 10px 1pƒx #ddd;
  margin-bottom: var(--space-large);
  background-color: ${(props) => props.backgroundColor};
`;

const ProfilePic = styled.img`
  height: 250px;
  width: 100%;
  object-fit: cover;
  border-top-left-radius: var(--space-small);
  border-top-right-radius: var(--space-small);
`;

const SocialAndTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 45%;
`;

const TextContainer = styled.div`
  padding: var(--space-small);
  border-bottom-left-radius: var(--space-small);
  border-bottom-right-radius: var(--space-small);
  p {
    color: white;
    text-align: center;
  }
`;

const SocialIconContainer = styled.div`
  padding: var(--space-small) 0;
  margin: 0 -10px;
  display: flex;
  justify-content: center;
`;

function SocialIconWrapper(props) {
  return <SocialIcon bgColor="transparent" fgColor="white" {...props} />;
}

const MemberCard = ({ member }) => {
  return (
    <CardContainer backgroundColor={member.cardColor}>
      <ProfilePic src={member.img} />
      <SocialAndTextContainer>
        <SocialIconContainer>
          {member.socials.map((socialURL, i) => {
            return <SocialIconWrapper url={socialURL} key={i} />;
          })}
        </SocialIconContainer>
        <TextContainer>
          <p>{member.name}</p>
          <p>{member.title}</p>
        </TextContainer>
      </SocialAndTextContainer>
    </CardContainer>
  );
};

export default MemberCard;
