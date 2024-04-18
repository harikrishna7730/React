import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavbarSection() {

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
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Contact</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link> */}
            <Link to={"/"} style={link}>
              Home
            </Link>
            <Link to={"/contact"} style={link}>
              Contact
            </Link>
            <Link to={"/About"} style={link}>
              About
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarSection;