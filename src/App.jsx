import React, { useState } from "react";
import Nav from "./components/Nav";

function App() {
  const [navCategories] = useState([
    {
      name: "About Me",
      description: "Why does Andrew write code?",
    },
    { name: "Portfolio", description: "Collection of my work" },
  ]);
  return (
    <>
      <Nav navCategories={navCategories}></Nav>
    </>
  );
}

export default App;
