import React, { useState } from "react";
import ButtonTestIndividualState from "./components/ButtonTestIndividualState";
import ButtonTest from "./components/ButtonTestLiftedState";

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Update Together</h1>
      <ButtonTest count={count} onClick={handleClick} />{" "}
      {/* Pass the state down from parent (`App`) to child (`ButtonTestLiftedState`) */}
      <ButtonTest count={count} onClick={handleClick} />
      <ul>
        <li>
          clicking button fires <code>onClick</code> handler
        </li>
        <li>
          the <code>onClick</code> prop is set to the <code>handleClick</code>{" "}
          function inside <code>myApp</code>
        </li>
        <li>
          The <code>handleClick</code> function calls{" "}
          <code>setCount(Count +1)</code> to increment the <code>count</code>{" "}
          variable
        </li>
        <li>
          The new <code>count</code> value is passed as a prop to each button,
          showing the new value
        </li>
      </ul>
      <hr />
      <h1>Update Separately</h1>
      <ButtonTestIndividualState />
      <ButtonTestIndividualState />
    </div>
  );
}

// export default function navCategories() {
//   const [count, setCount] = useState(0);

//   const listCategories = categories.map((category) => (
//     <li key={category.name}>{category.name}</li>
//   ));

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <>
//       <ul>
//         {listCategories}
//         <li>{count}</li>
//       </ul>
//       <button onClick={handleClick}>increment</button>
//     </>
//   );
// }
