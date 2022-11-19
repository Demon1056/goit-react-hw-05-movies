import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, NavItem, Nav } from './LayoutStyled';

const Layout = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/movies">Movies</NavItem>
        </Nav>
      </Header>{' '}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
