import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavList = styled.ul`
  list-style: none;
  display: flex;
  font-size: 1.5rem;
  align-items: center;
  .selected {
    background-color: white;
  }
`;
const NavItem = styled.li`
  padding: 1rem;

  a {
    text-decoration: none;
    color: var(--text-color);
    font-weight: bold;
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
`;

const NavLinks = () => {
  return (
    <NavList>
      {["mission", "members", "projects"].map((i) => (
        <NavItem key={i}>
          <NavLink to={`/${i}`} activeClassName="selected">
            {i}
          </NavLink>
        </NavItem>
      ))}
    </NavList>
  );
};

export default NavLinks;
