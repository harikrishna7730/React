import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./header.css"

function Header() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navigations</Navbar.Brand>
          <Nav className="me-auto">
            <Link to={"/"} id='btn'>
            Home
            </Link>
            <Link to={"/contact"} id='btn'>
            contact
            </Link>
            <Link  id='btn'>
            Form
            </Link>
            <Link  id='btn'>
            ProductListing
            </Link>
            <Link  id='btn'>
            About
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;