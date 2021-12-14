import React from "react";
import logo from "../../../assets/LogoGrande.png";

function Home() {
  return (
    <div className="homePage" id="home">
      <img src={logo} alt="logo" className="logoHome" />
      <h2>
        Catálogo para <br />
        preventistas
      </h2>
    </div>
  );
}

export default Home;
