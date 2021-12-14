import { Navbar, Nav, Container } from "react-bootstrap";
import logo2 from "../../../assets/logo2.png";
import { useEffect, useState } from "react";

function NavBar(props) {
  const [state, setstate] = useState(true);
  const handleClick = () => {
    window.scroll({ top: 0, left: 0, behaviour: "instant" });
  };
  const changePage = () => {
    props.changePage("store");
  };
  useEffect(() => {
    console.log(window.localStorage);
    window.localStorage.getItem("pedido") !== null && setstate(false);
  }, []);
  const goHome = () => {
    props.changePage("home");
  };
  const closeMenu = () => {
    let navBar = document.getElementById("basic-navbar-nav");
    let navClass = navBar.className;
    navClass === "navbar-collapse collapse show"
      ? (navBar.className = "navbar-collapse collapse")
      : (navBar.className = "navbar-collapse collapse show");
  };
  return (
    <Navbar bg="light" expand="lg" id="navBar">
      <Container>
        <Navbar.Brand onClick={handleClick}>
          <img src={logo2} alt="logo" className="navLogo" onClick={goHome} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#secos" onClick={closeMenu}>
              SECOS
            </Nav.Link>
            <span></span>
            <Nav.Link href="#frutales" onClick={closeMenu}>
              FRUTALES
            </Nav.Link>
            <span></span>
            <Nav.Link href="#cremosos" onClick={closeMenu}>
              CREMOSOS
            </Nav.Link>
            <span></span>
            <Nav.Link href="#al café" onClick={closeMenu}>
              AL CAFÉ
            </Nav.Link>
            <span></span>
            <Nav.Link href="#golden age" onClick={closeMenu}>
              GOLDEN AGE
            </Nav.Link>
            <span></span>
            <Nav.Link
              href="#link"
              className="pedido"
              onClick={() => {
                changePage();
                closeMenu();
              }}
            >
              MI PEDIDO
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
