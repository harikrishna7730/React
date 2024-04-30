import React from 'react';
import useCounter from './useCounter'; // Import the custom hook

import { useState } from 'react';

// Custom Hook: useCounter
// const useCounter = (initialValue = 0, step = 1) => {
//   const [count, setCount] = useState(initialValue);

//   const increment = () => {
//     setCount(prevCount => prevCount + step);
//   };

//   const decrement = () => {
//     setCount(prevCount => prevCount - step);
//   };

//   const reset = () => {
//     setCount(initialValue);
//   };

//   return {
//     count,
//     increment,
//     decrement,
//     reset
//   };
// };

// export default useCounter;


const Counter = () => {
  // Use the custom hook to initialize counter state and methods
  const { count, increment, decrement, reset } = useCounter(0, 1);

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
