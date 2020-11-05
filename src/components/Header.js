import { Link } from "react-router-dom";
import styled from "styled-components";
const HeaderContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding-right: 2rem;
`;
const NavList = styled.ul`
  list-style: none;
  display: flex;
`;
const NavItem = styled.li`
  padding: 1rem 0.5rem;

  a {
    text-decoration: none;
    color: white;
  }
`;
const Header = () => {
  return (
    <HeaderContainer>
      <NavList>
        {["mission", "members", "projects"].map((i) => (
          <NavItem key={i}>
            <Link to={`/${i}`}>{i}</Link>
          </NavItem>
        ))}
      </NavList>
    </HeaderContainer>
  );
};

export default Header;
