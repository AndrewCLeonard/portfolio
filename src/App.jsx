import React, { useState } from "react";
// import Nav from "./components/Nav";

const categories = [
  {
    name: "About Me",
    description: "Why does Andrew write code?",
  },
  { name: "Portfolio", description: "Collection of my work" },
];

// export default function navCategories() {
//   const listCategories = categories.map((category) => {
//     <li key={category.name}>{category.name}</li>;
//   });
//   return <ul>{listCategories}</ul>;
// }

export default function navCategories() {
  const [count, setCount] = useState(0);

  const listCategories = categories.map((category) => (
    <li key={category.name}>{category.name}</li>
  ));

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <ul>
        {listCategories}
        <li>{count}</li>
      </ul>
      <button onClick={handleClick}>increment</button>
    </>
  );
}
// const products = [
//   { title: "Cabbage", isFruit: false, id: 1 },
//   { title: "Garlic", isFruit: false, id: 2 },
//   { title: "Apple", isFruit: true, id: 3 },
// ];

// export default function ShoppingList() {
//   const listItems = products.map((product) => (
//     <li
//       key={product.id}
//       style={{
//         color: product.isFruit ? "magenta" : "darkgreen",
//       }}
//     >
//       {product.title}
//     </li>
//   ));

//   return <ul>{listItems}</ul>;
// }
