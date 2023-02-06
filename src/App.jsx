import React, { useState } from "react";
import ButtonTestIndividualState from "./components/ButtonTestIndividualState";
import ButtonTest from "./components/ButtonTestLiftedState";

import Avatar from "./components/Avatar"; // Avatar Example: https://beta.reactjs.org/learn/passing-props-to-a-component#passing-props-to-a-component

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }


  return (
    <>
      <div>
        <h1>Update Together</h1>
        <ButtonTest count={count} onClickerooni={handleClick} />{" "}
        {/* Pass the state down from parent (`App`) to child (`ButtonTestLiftedState`) */}
        <ButtonTest count={count} onClickerooni={handleClick} />
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
      <hr />
      {/*

      Avatar Example

      */}
      <h1>Avatar Example</h1>
      <div>
        <Avatar
          size={100}
          // double curlies to pass in objects: https://beta.reactjs.org/learn/javascript-in-jsx-with-curly-braces#using-double-curlies-css-and-other-objects-in-jsx
          person={{
            name: "Katsuko Saruhashi",
            imageId: "YfeOqp2",
          }}
        />
        <Avatar
          size={80}
          person={{
            name: "Aklilu Lemma",
            imageId: "OKS67lh",
          }}
        />
        <Avatar
          size={50}
          person={{
            name: "Lin Lanying",
            imageId: "1bX5QH6",
          }}
        />
      </div>

      {/*

        Challenges https://beta.reactjs.org/learn/passing-props-to-a-component#challenges

       */}
      <hr />
      <h1>Challenge 1</h1>
    </>
  );
}
