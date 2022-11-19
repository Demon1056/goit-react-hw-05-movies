import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
`;
export const Header = styled.header`
  border-bottom: 1px solid grey;
  box-shadow: 0px 1px grey;
  padding: 5px;
  margin-bottom: 20px;
`;

export const Nav = styled.nav`
  display: flex;
`;
export const NavItem = styled(NavLink)`
  display: flex;
  font-size: 20px;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid grey;
  :not(:last-child) {
    margin-right: 10px;
  }
  &.active {
    background-color: rosybrown;
  }
`;
