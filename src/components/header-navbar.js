import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {

  const styless={
   
      padding: "10px",
      fontSize: "24px",
      color: "black",
      textDecoration: "none",
      marginLeft: "30px"
 
  }
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navigations</Navbar.Brand>
          <Nav className="me-auto">
            <Link to={"/"} id='btn' style={styless}>
            Home
            </Link>
            <Link to={"/contact"} id='btn' style={styless}>
            contact
            </Link>
            <Link  id='btn' style={styless}>
            Form
            </Link>
            <Link to={"/Recipes"} id='btn'style={styless}>
            ProductListing
            </Link>
            <Link  id='btn' style={styless}>
            About
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;