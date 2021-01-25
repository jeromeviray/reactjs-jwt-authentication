import React from 'react';
import {
    Navbar, Nav
} from 'react-bootstrap/';
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Link to="/" className="navbar-brand"> TechKnows </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/product" className="nav-link">Product</Link>
                        <Link to="/login" className="nav-link">Login</Link>
                        <Link to="/service" className="nav-link">Service</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>
    );
}
