import React from "react";

function App() {
  const [likes, setLikes] = React.useState<number>(0);
  const [value, setValue] = React.useState<string>("INPUT TEXT");

  function increment(): void {
    setLikes(likes + 1);
  }

  function decrement(): void {
    setLikes(likes - 1);
  }
  return (
    <div className="App">
      <h1>{likes}</h1>
      <h1>{value}</h1>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
