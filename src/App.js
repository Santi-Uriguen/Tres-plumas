import { useState } from "react";
import "./App.css";
import "./assets/fonts/cymru sans/stylesheet.css";
import "./assets/fonts/PT sans/stylesheet.css";
import "./assets/fonts/wales sans/stylesheet.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Store from "./components/store/Store";

function App() {
  window.addEventListener("scroll", function () {
    let navbar = document.getElementById("navBar");
    if (window.scrollY >= window.innerHeight) {
      navbar.classList.add("fixed");
      document.querySelector("main").classList.add("fixed");
    } else {
      navbar.classList.remove("fixed");
      document.querySelector("main").classList.remove("fixed");
    }
  });
  const [page, setPage] = useState("main");
  const changePage = (to) => {
    if (to === "store") {
      setPage("store");
    } else {
      setPage("main");
    }
  };
  return (
    <div className="App" id="App">
      <Header changePage={changePage} />
      {page === "main" ? (
        <Main changePage={changePage} />
      ) : (
        <Store changePage={changePage} />
      )}
    </div>
  );
}

export default App;
