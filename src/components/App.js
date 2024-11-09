import React from "react";
import Home from "./Home"
import NavBar from "./NavBar";
import About from "./About";
import imageUrl from "./images/demo.png"

function App() {
  const username ="Liz"
  const city ="Newyork"
  return (
    <div>
      <NavBar />
      <Home username={username} city={city}/>
      <About image ={imageUrl}/>
    </div>
  );
}

export default App;
