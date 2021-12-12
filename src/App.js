import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  let lastScrollTop = 0;
  let viewport = window.innerHeight;
  window.addEventListener(
    "scroll",
    function () {
      // or window.addEventListener("scroll"....
      let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      if (st > lastScrollTop) {
        //acá está en la pagina principal
        let scrolled = window.scrollY;
        if ((scrolled >= 0) & (scrolled <= viewport)) {
          window.scrollTo(0, viewport);
        } else if ((scrolled >= viewport) & (scrolled <= viewport * 2)) {
          window.scrollTo(0, viewport * 2);
        }
        document.getElementById("navBar").classList.add("fixed");
      } else {
        let scrolled = window.scrollY;
        if ((scrolled <= viewport) & (scrolled >= 0)) {
          window.scrollTo(0, 0);
          document.getElementById("navBar").classList.remove("fixed");
        }
        if ((scrolled <= viewport * 2) & (scrolled >= viewport)) {
          window.scrollTo(0, viewport);
        }
      }
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    },
    false
  );
  return (
    <div className="App" id="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
