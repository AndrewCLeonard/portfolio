import React, { useState } from "react";

const categories = [
  {
    name: "About Me",
    description: "Why does Andrew write code?",
  },
  { name: "Portfolio", description: "Collection of my work" },
];

export default function ButtonTest({ count, onClickerooni }) {
  // read props from parent component

  return (
    <>
      <button onClick={onClickerooni}>increment {count}</button>
    </>
  );
}
