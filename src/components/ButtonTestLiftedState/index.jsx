import React, { useState } from "react";

const categories = [
  {
    name: "About Me",
    description: "Why does Andrew write code?",
  },
  { name: "Portfolio", description: "Collection of my work" },
];

export default function ButtonTest({ count, onClick }) { // read props from parent component

  return (
    <>
      <button onClick={onClick}>increment {count}</button>
    </>
  );
}

