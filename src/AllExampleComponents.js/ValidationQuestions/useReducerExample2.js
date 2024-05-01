import { useReducer } from "react"
import ReducerFunction from "./useReducerExample3"

const ExampleReducer=()=>{

    const initialvalue={
        name:"hari",
        age:21
    }

    const[currentvalue,dispatch]=useReducer(ReducerFunction,initialvalue)
    return(
        <>
        <h1>useReducer Example:</h1>
        <h2>App2ge:{currentvalue.age}</h2>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
        <h2>Name:{currentvalue.name}</h2>
        <button onClick={()=>dispatch({type:"CHANGE_NAME"})}>change_Name</button>
        </>
    )
}
export default ExampleReducer