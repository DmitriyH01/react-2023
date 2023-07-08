import React from "react";
import Counter from "./component/Counter";
import ClassCounter from "./component/ClassCounter";

function App() {
  const [value, setValue] = React.useState<string>("INPUT TEXT");

  return (
    <div className="App">
      <h1>{value}</h1>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <Counter />
      <ClassCounter />
    </div>
  );
}

export default App;
