import Container from '../node_modules/react-bootstrap/esm/Container';
import Nav from '../node_modules/react-bootstrap/esm/Nav';
import Navbar from '../node_modules/react-bootstrap/esm/Navbar';
import NavDropdown from '../node_modules/react-bootstrap/esm/NavDropdown';
import App from "./App";
import LoginForm from "./LoginForm";

import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function NavBar() {
    return (
        <Navbar bg="light" expand="xl" fixed="top">
            <Container>
                <Navbar.Brand href="/">OnlineShop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Shop" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Woman</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Man</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Kids</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/">Location</Nav.Link>
                        <Nav.Link href="/LoginForm">My profile</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

            <Router>
                <Routes>
                    <Route path="/" component={App} />
                    <Route path="/LoginForm" component={LoginForm} />
                </Routes>
            </Router>
        </Navbar>
    );
}

export default NavBar;