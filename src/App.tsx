import React from "react";
import "./styles/App.css";
import PostItem from "./component/PostItem";
// import Counter from "./component/Counter";
// import ClassCounter from "./component/ClassCounter";

function App() {
  const [value, setValue] = React.useState<string>("INPUT TEXT");

  return (
    <div className="App">
      <PostItem />

      {/* <h1>{value}</h1>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <Counter />
      <ClassCounter /> */}
    </div>
  );
}

export default App;
