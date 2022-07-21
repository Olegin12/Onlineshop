import Container from '../node_modules/react-bootstrap/esm/Container';
import Nav from '../node_modules/react-bootstrap/esm/Nav';
import Navbar from '../node_modules/react-bootstrap/esm/Navbar';
import NavDropdown from '../node_modules/react-bootstrap/esm/NavDropdown';

function NavBar() {
    return (
        <Navbar bg="light" expand="xl" fixed="top">
            <Container>
                <Navbar.Brand href="#home">OnlineShop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Shop" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Woman</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Man</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Kids</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home">Location</Nav.Link>
                        <Nav.Link href="#link">My profile</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;