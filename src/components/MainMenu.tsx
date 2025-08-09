import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { AppRoutes } from 'src/constants/app-routes';

export const MainMenu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={AppRoutes.HOME}>
          <h1>Книга контактов</h1>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to={AppRoutes.GROUPS}>
            Группы
          </Nav.Link>
          <Nav.Link as={Link} to={AppRoutes.FAVORITE}>
            Избранное
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
