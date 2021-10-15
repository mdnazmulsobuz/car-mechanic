import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
        <Navbar sticky="top" bg="dark" variant="dark" collapseOnSelect expand="lg">
            <Container>
            <Navbar.Brand href="#home">Car Mechanic</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
                {user?.email ?
                <Nav.Link onClick={logOut} variant='light'>Logout</Nav.Link>:
                <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
                }
                
            <Navbar.Text>
                <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
            </Navbar.Collapse>
            
            </Container>
        </Navbar>
        </> 
      
    );
};

export default Header;