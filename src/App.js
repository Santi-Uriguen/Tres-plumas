import { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  // const handleScroll = () => {
  //   console.log("ahora si perro");
  // };
  // let times = 0;
  // useEffect(() => {
  //   window.onscroll = () => {
  //     times = times + 1;
  //     console.log(times);
  //   };
  // });
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
