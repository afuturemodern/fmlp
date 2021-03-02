import styled from "styled-components";
import Logo from "./Logo.js";
import NavLinks from "./NavLinks";
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
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
