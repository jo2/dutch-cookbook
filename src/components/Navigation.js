import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";

const Navigation = () => {
    return (

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Dutch Cookbook</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="link">List</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};


export default Navigation;