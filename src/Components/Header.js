import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="#home">IAN Lombu</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#about">ABOUT</Nav.Link>
                    <Nav.Link href="#skills">SKILLS</Nav.Link>
                    <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
                    <Nav.Link href="#contact">CONTACT</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
