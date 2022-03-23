import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../../images/Logo.svg';
import './Header.css';


const Header = () => {
    return (
        <Navbar className="header-nav" expand="lg" fixed="top">
        <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse  id="basic-navbar-nav">
            <Nav className="ms-auto">
                <li className="nav-item">
                    <a href="./shop" className="nav-item">Shop</a>
                </li>
                <li className="nav-item">
                    <a href="./order" className="nav-item">Order</a>
                </li>
                <li className="nav-item">
                    <a href="./order-review" className="nav-item">Order Review</a>
                </li>
                <li className="nav-item">
                    <a href="./manage-inventory" className="nav-item">Manage Inventory</a>
                </li>
                
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default Header;