import React, { useReducer } from 'react';
const initialvalue={
    count:0
}

// Reducer function to manage state transitions
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'reset':
      return { ...state, count: 0 };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
};

const Counter = () => {
  // Initialize state using useReducer
  const [state, dispatch] = useReducer(reducer, initialvalue);

  const Handlereset=()=>{
       dispatch({type:"reset"})
  }

  return (
    <div>
      <h1>Counter using useReducer</h1>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={Handlereset}>Reset</button>
    </div>
  );
};

export default Counter;
