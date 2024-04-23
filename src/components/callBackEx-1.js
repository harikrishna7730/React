import React, { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <ChildComponent handleClick={handleClick} />
      <button onClick={handleClick}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
}

function ChildComponent({ handleClick }) {
  return (
    <button onClick={handleClick}>Increment from Child</button>
  );
}

export default ParentComponent;
