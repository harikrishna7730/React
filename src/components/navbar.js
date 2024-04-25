import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const  NavbarSection=()=> {

  const stylee={
    marginLeft:"10px",
    color:"white",
  }
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
           <Link to={"/"} style={stylee}>
             Home
           </Link>
           <Link to={"/about"} style={stylee}>
             About
           </Link>
           <Link to={"/contact"} style={stylee}>
             Contact
           </Link>
          </Nav>
        </Container>
      </Navbar>
      <br />  
    </>
  );
}

export default NavbarSection;