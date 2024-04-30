import React, { useState, useEffect } from 'react';

const LifecycleExample = () => {
  const [count, setCount] = useState(0);

  // useEffect with empty dependency array to simulate componentDidMount
//   useEffect(() => {
//     console.log('Component mounted');

//     // Clean-up function to simulate componentWillUnmount
//     return () => {
//       console.log('Component will unmount');
//     };
//   }, []); // Empty dependency array means this effect runs only once after initial render

  // useEffect with count dependency to simulate componentDidUpdate
  useEffect(() => {
    // console.log(`Count updated: ${count}`);

    // // Simulate side effect based on count (e.g., API request, subscription)
    // // For simplicity, we'll just log a message here
    // console.log(`Count is now: ${count}`);
   
    // Clean-up function (optional)
    // return () => {
    // //   console.log('Count cleanup');
    // };
  }, [count]); // Run this effect whenever 'count' changes

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
    console.log("increment rendering....")
  };
  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
    console.log("decrement rendering....")
  };

  return (
    <div>
      <h1>Lifecycle Example</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
      <button onClick={decrementCount}>decrement Count</button>
    </div>
  );
};

export default LifecycleExample;
