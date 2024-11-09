import React from "react";
import Home from "./Home"
import NavBar from "./NavBar";
import About from "./About";
import imageUrl from "./images/demo.png"

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About image ={imageUrl}/>
    </div>
  );
}

export default App;
