import Container from 'react-bootstrap/cjs/Container';
import Nav from 'react-bootstrap/cjs/Nav';
import Navbar from 'react-bootstrap/cjs/Navbar';

import React from "react";

function NavBar() {
    return (
        <Navbar bg="light" expand="xl" fixed="top">
            <Container>
                <Navbar.Brand href="/">OnlineShop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/CataloguePage">CataloguePage</Nav.Link>
                        <Nav.Link href="/">Location</Nav.Link>
                        <Nav.Link href="/LoginFormPage">My profile</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;