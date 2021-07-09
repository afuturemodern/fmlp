import styled from 'styled-components';
// import { SocialIcon } from 'react-social-icons';
import { MemberCardIcons } from '../shared/SocialIcons';

const CardContainer = styled.div`
  height: 100%;
  width: 18rem;
  border: var(--space-medium) solid ${(props) => props.backgroundColor};
  border-radius: var(--space-medium);
  box-shadow: 2px 3px 10px 1pƒx #ddd;
  margin-bottom: var(--space-medium);
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
    font-size: 1.2rem;
  }
`;

const SocialIconContainer = styled.div`
  padding: var(--space-small) 0;
  margin: 0 -10px;
  display: flex;
  justify-content: center;
`;

const MemberCard = ({ member }) => {
  const findSocial = (socialName) => {
    return member.socials.find((social) => social.name === socialName);
  };

  return (
    <CardContainer backgroundColor={member.cardColor}>
      <ProfilePic src={member.img} />
      <SocialAndTextContainer>
        <SocialIconContainer>
          <MemberCardIcons
            logo={'twitter'}
            url={findSocial('twitter') ? findSocial('twitter').url : null}
          />
          <MemberCardIcons
            logo={'instagram'}
            url={findSocial('instagram') ? findSocial('instagram').url : null}
          />
          <MemberCardIcons
            logo={'youtube'}
            url={findSocial('youtube') ? findSocial('youtube').url : null}
          />
          <MemberCardIcons
            logo={'audius'}
            url={findSocial('audius') ? findSocial('audius').url : null}
          />
          <MemberCardIcons
            logo={'rarible'}
            url={findSocial('rarible') ? findSocial('rarible').url : null}
          />
          <MemberCardIcons
            logo={'soundcloud'}
            url={findSocial('soundcloud') ? findSocial('soundcloud').url : null}
          />
          <MemberCardIcons
            logo={'cent'}
            url={findSocial('cent') ? findSocial('cent').url : null}
          />
          <MemberCardIcons
            logo={'bandcamp'}
            url={findSocial('bandcamp') ? findSocial('bandcamp').url : null}
          />
          <MemberCardIcons
            logo={'appleMusic'}
            url={findSocial('appleMusic') ? findSocial('appleMusic').url : null}
          />
          <MemberCardIcons
            logo={'spotify'}
            url={findSocial('spotify') ? findSocial('spotify').url : null}
          />
          <MemberCardIcons
            logo={'website'}
            url={findSocial('website') ? findSocial('website').url : null}
          />
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
