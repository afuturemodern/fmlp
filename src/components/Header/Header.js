import styled from "styled-components";
import Logo from "./Logo.js";
import NavLinks from "./NavLinks";
const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media(max-width: 840px) {
    justify-content: space-around;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <NavLinks />
    </HeaderContainer>
  );
}

export default Header;
