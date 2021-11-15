import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useFirebase';
import './Navigation.css'

const Navigation = () => {
    const {user,logOut}=useAuth();
    return (
        <div>
            <Navbar className="pt-1 pb-1" collapseOnSelect expand="lg md"  bg="customColor" sticky="top" variant="dark">
                <Container>
                <Navbar.Brand as={Link} to="/home">
                <img
                        src="https://i.ibb.co/NnZFmvz/Logo-Makr-6-Rbr-Go.png"
                        width="80"
                        height="80"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                />
                
                </Navbar.Brand>
                <Navbar.Toggle />

                <NavbarCollapse className=" justify-content-end">
                <Nav className="me-lg-5 ">
                    <Nav.Link className="fw-bold fs-4 text-white " as={Link} to="/home"><li className="c-li">Home</li></Nav.Link>
                    <Nav.Link className="fw-bold fs-4 text-white " as={Link} to="/products"><li className="c-li" >Explore</li></Nav.Link>
                    <Nav.Link className="fw-bold fs-4 text-white " as={Link} to="/products"><li className="c-li" >AboutUS</li></Nav.Link>
                    
                    
                    {/* {
                        user?.email?<Nav.Link className="fw-bold " as={Link} to="/myorders"><li className="c-li">My Orders</li></Nav.Link>:""
                    } */}
                </Nav>
                    {
                        user?.email?<Nav.Link  as={Link} to="/dashboard"><button className="btn btn-danger">DASHBOARD</button></Nav.Link>:""
                    }
                    
                   <Nav className="ms-lg-5">
                     
                    
                    

                    <Navbar.Text className="mt-2 user-name">
                        <h5 className="fw-bold text-white">{user?.displayName }</h5>
                     </Navbar.Text>
                    {
                        user?.email?<Nav.Link  as={Link} to="/login"><button onClick={logOut} className="btn text-white login-btn">LogOut</button></Nav.Link>:
                        <Nav.Link  as={Link} to="/login"><button className="btn login-btn text-white">Login</button></Nav.Link>
                        
                        
                    }

                    
                    
                    
                   
                </Nav>
                </NavbarCollapse>
                

                
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;