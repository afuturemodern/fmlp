import styled from "styled-components";
import { Link } from "react-router-dom";
import textLogo from "../../images/text_logo.png";
import turtleLogo from "../../images/plain_logo.png";
const TurtleLogo = styled.img`
  height: 75px;
  margin-right: var(--space-medium);
`;
const TextLogo = styled.img`
  height: 75px;
`;
const LogoContainer = styled(Link)`
  display: flex;
  padding: var(--space-medium);
`;

const Logo = () => {
  return (
    <LogoContainer to="/">
      <TurtleLogo src={turtleLogo} />
      <TextLogo src={textLogo} />
    </LogoContainer>
  );
};

export default Logo;
