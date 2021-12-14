import Home from "./components/Home";
import NavBar from "./components/NavBar";

export default function Header(props) {
  return (
    <header>
      <Home />
      <NavBar changePage={props.changePage} />
    </header>
  );
}
