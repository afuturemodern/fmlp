import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/plain_logo.png";
import txtLogo from "../images/text_logo.png";

const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;
const NavList = styled.ul`
  list-style: none;
  display: flex;
  font-size: 1.5rem;

  .selected {
    background: rgba(255, 255, 255, 0.3);
  }
`;
const NavItem = styled.li`
  padding: 1rem 0.5rem;

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
`;

const NavLogo = styled.img`
  height: 150px;
  padding-right: 2rem;
`;
const TextLogo = styled.img`
  height: 75px;
`;
const HeaderLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderLogo = () => {
  return (
    <HeaderLogoContainer>
      <Link to="/">
        <NavLogo src={logo} />
      </Link>
      <TextLogo src={txtLogo} />
    </HeaderLogoContainer>
  );
};

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo />
      <NavList>
        {["mission", "members", "projects"].map((i) => (
          <NavItem key={i}>
            <NavLink to={`/fmlp/${i}`} activeClassName="selected">
              {i}
            </NavLink>
          </NavItem>
        ))}
      </NavList>
    </HeaderContainer>
  );
};

export default Header;
