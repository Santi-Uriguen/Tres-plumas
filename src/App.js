import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

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

  return (
    <div className="App" id="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
