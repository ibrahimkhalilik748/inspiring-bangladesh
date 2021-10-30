import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        <div className="Navigation">
            <Navbar bg="dark" collapseOnSelect variant="dark" expand="lg">
                <Container>
                    <Link className="fs-5 fw-bolder" to="/">Inspiring Bangladesh</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className=" me-auto">
                            <Link to="/video1">Video 1</Link>
                            <Link to="/video2">Video 2</Link>
                            <Link to="/video3">Video 3</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br />
            {/* <Navbar collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="/video-one">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
        </div>
    );
};

export default Navigation;