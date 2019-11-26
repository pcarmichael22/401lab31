import React, { useState, useEffect, useReducer } from "react";

const initialState = { words: "<Initial State>" };

const App = () => {
  let [input, setInput] = useState("");
  let [state, reducer] = useReducer(Reducer, initialState);

  useEffect(() => {
    document.title = `{state.words}`;
  });

  let handleSubmit = event => {
    event.preventDefault();
    console.log(input, state);
    reducer({ type: "enter", payload: input });
  };

  let handleReset = event => {
    event.preventDefault();
    console.log(input, state);
    reducer({ type: "reset", payload: input });
  };

  return (
    <>
      <div>My App</div>
      <div>{state.words}</div>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <input
          type="text"
          value={input}
          onChange={event => setInput(event.target.value)}
        />
        <button type="submit">submit</button>
        <button type="reset">reset</button>
      </form>
    </>
  );
};

let Reducer = (state, action) => {
  console.log("state:", state, "action:", action);
  console.log(action.payload);
  switch (action.type) {
    case "enter":
      return { words: action.payload.toUpperCase() };
    case "reset":
      return { words: "" };
    default:
      throw new Error();
  }
};

export default App;
