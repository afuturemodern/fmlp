import styled from 'styled-components';
import { SocialIcons as SI } from './SocialIcons';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 20px 0px;
  bottom: 0;

  .social-icon {
    margin: 0 8px;
  }
`;

// TODO: Add in correct links (use a json file with an array so it's easy to update/add/remove/reorder links)

function Footer() {
  return (
    <FooterContainer>
      <SI
        logo="twitter"
        url="https://twitter.com/afuturemodern"
        backgroundColor="#7E589E"
      />
      <SI
        logo="instagram"
        url="https://instagram.com/afuturemodern"
        backgroundColor="#02734A"
      />
      <SI
        logo="discord"
        url="https://discord.gg/vzmaMbrQyp"
        backgroundColor="#D475A5"
      />
      <SI
        logo="github"
        url="https://github.com/afuturemodern"
        backgroundColor="#2BA6D8"
      />
      <SI
        logo="replin"
        url="https://replin.com/afuturemodern"
        backgroundColor="#5574F5"
      />
    </FooterContainer>
  );
}

export default Footer;
