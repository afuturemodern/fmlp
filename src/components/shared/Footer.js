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

function Footer() {
  return (
    <FooterContainer>
      <SocialIconWrapper url="https://twitter.com/" className="social-icon" />
      <SocialIconWrapper url="https://instagram.com" className="social-icon" />
      <SocialIconWrapper url="https://discord.com" className="social-icon" />
      <SocialIconWrapper url="https://reddit.com" className="social-icon" />
      <SocialIconWrapper url="https://rarible.com" className="social-icon" />
    </FooterContainer>
  );
}

export default Footer;
