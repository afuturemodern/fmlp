import styled from "styled-components";
import { SocialIcon } from 'react-social-icons';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 20px 0px;
  bottom: 0;

  .social-icon {
    margin: 0 8px;
  }
`;

function SocialIconWrapper (props) {
  return <SocialIcon className="social-icon" fgColor="white" {...props} />;
}

// TODO: Add in correct links (use a json file with an array so it's easy to update/add/remove/reorder links)

const footerIcons = [
  { name: 'twitter', url: 'https://twitter.com/afuturemodern' },
  { name: 'instagram', url: 'https://www.instagram.com/afuturemodern/' },
  { name: 'discord', url: 'discord.gg/vzmaMbrQyp' },
  { name: 'reddit', url: 'https://www.reddit.com/user/afuturemodern/' },
  { name: 'replin', url: 'https://replin.com/afuturemodern' },
].map(icon => <SocialIconWrapper url={icon.url} className="social-icon" />)

function Footer() {
  return (
    <FooterContainer>
      {footerIcons}
    </FooterContainer>
  );
}

export default Footer;
