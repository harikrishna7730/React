// import React, { useState, useCallback } from "react";

import { useCallback, useState } from "react"

// const TodoList = () => {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState("");

//   // Callback function to add a new todo
//   const addTodo = useCallback(() => {
//     if (inputValue.trim() !== "") {
//       setTodos([...todos, inputValue]);
//       setInputValue(""); // Clear input field after adding todo
//     }
//   }, [inputValue, todos]);

//   // Handle input change
//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   return (
//     <div>
//       <h2>Todo List</h2>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>{todo}</li>
//         ))}
//       </ul>
//       <div>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={handleInputChange}
//           placeholder="Enter a new todo"
//         />
//         <button onClick={addTodo}>Add Todo</button>
//       </div>
//     </div>
//   );
// };

// export default TodoList;



const TodosList=()=>{

    const[inputvalue,setInputValue]=useState("")
    const[todos,settodos]=useState([])

    const Addtodos=useCallback(()=>{
       settodos([...todos,inputvalue])
       setInputValue("") //to become empty after adding todos
    },[todos,inputvalue])

    const handleinputchange=(e)=>{
       setInputValue(e.target.value)
    }

    const handledelete=useCallback((index)=>{
       const result=[...todos]
        result.splice(index,1)
        settodos(result)
    },[todos])
        return(
        <>
        <h1>todosListing</h1>
        <input
        type="text"
        value={inputvalue}
        onChange={handleinputchange}
        />
        <button onClick={Addtodos}> Add todos</button>

        <br></br>

        <ul>
            {
                todos.map((item,index)=>{
                    return( <>
                    <li key={index}>{item}</li>
                    <button onClick={()=>handledelete(index)}>Delete</button>
                    </>
                )
                })
            }
        </ul>
        </>
    )
}
export default TodosList