import React from "react";
import Home from "./Home"
import NavBar from "./NavBar";
import About from "./About";
import const username ="Liza" from "./data/user"

function App() {
  return (
    <div>
      <NavBar />
      <Home username={username} city={city}/>
      <About />
    </div>
  );
}

export default App;
