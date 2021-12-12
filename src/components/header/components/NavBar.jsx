import { Navbar, Nav, Container } from "react-bootstrap";
import logo2 from "../../../assets/logo2.png";

function NavBar(props) {
  const handleClick = () => {
    window.scroll({ top: 0, left: 0, behaviour: "instant" });
  };
  return (
    <Navbar bg="light" expand="lg" id="navBar">
      <Container>
        <Navbar.Brand onClick={handleClick}>
          <img src={logo2} alt="logo" className="navLogo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Secos</Nav.Link>
            <Nav.Link href="#link">Frutales</Nav.Link>
            <Nav.Link href="#link">Cremosos</Nav.Link>
            <Nav.Link href="#link">Al Café</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
