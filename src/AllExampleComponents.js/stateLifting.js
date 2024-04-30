import React, { useState } from 'react';

// Parent Component
const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent count={count} onIncrement={incrementCount} />
    </div>
  );
};

// Child Component
const ChildComponent = ({ count, onIncrement }) => {
  return (
    <div>
      <p>Child Component</p>
      <button onClick={onIncrement}>Increment Count</button>
      <p>Count from Parent: {count}</p>
    </div>
  );
};

export default ParentComponent;
