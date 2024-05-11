import { useCallback, useState } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";

const Callback = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  },[todos])


  return (
    <>
      <Todos todos={todos}  />
      <button onClick={addTodo}>Add Todo</button>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};


export default Callback