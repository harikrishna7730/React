
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import CardItemss from '../pages/Cart-Items';
import { DataShare } from '../NavigationStack/Allnavigations';
import { useContext } from 'react';

function NavbarSection() {
  const{carditems}=useContext(DataShare)

    const link={
      marginLeft:"30px",
      color:"white",
      textDecorate:"none"
    }
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to={"/"} style={link}>
              Home
            </Link>
            <Link to={"/contact"} style={link}>
              Contact
            </Link>
            <Link to={"/About"} style={link}>
              About
            </Link>
            <Link to={"/cardItemss"} style={link}>
              cardItems{carditems.length}
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarSection;