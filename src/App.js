import { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  let lastScrollTop = 0;
  window.addEventListener(
    "scroll",
    function () {
      // or window.addEventListener("scroll"....
      let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      if (st > lastScrollTop) {
        let scrolled = window.scrollY;
        if ((scrolled >= 0) & (scrolled <= 700)) {
          window.scrollTo(0, 700);
        }
      } else {
        let scrolled = window.scrollY;
        if ((scrolled <= 700) & (scrolled >= 0)) {
          window.scrollTo(0, 0);
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
