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
            <Nav.Link href="#link">SECOS</Nav.Link>
            <span></span>
            <Nav.Link href="#link">FRUTALES</Nav.Link>
            <span></span>
            <Nav.Link href="#link">CREMOSOS</Nav.Link>
            <span></span>
            <Nav.Link href="#link">AL CAFÉ</Nav.Link>
            <span></span>
            <Nav.Link href="#link">GOLDEN AGE</Nav.Link>
            <span></span>
            <Nav.Link href="#link" className="pedido">
              MI PEDIDO
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
