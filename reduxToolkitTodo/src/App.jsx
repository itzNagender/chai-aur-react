import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen flex items-center justify-start flex-col pt-10 bg-teal-600">
        <h1 className="text-5xl font-bold flex items-center justify-center">
          Learn about Redux Toolkit
        </h1>
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
