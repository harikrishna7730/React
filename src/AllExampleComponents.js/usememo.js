import React, { useState, useMemo } from 'react';

const MemoizedValueExample = () => {
  const [inputValue, setInputValue] = useState('');
  
  const reversedValue = useMemo(() => {
    console.log('Computing reversed value...');
    return inputValue.split('').reverse().join('');
  }, [inputValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>UseMemo Example</h1>
      <label htmlFor="input">Enter a value:</label>
      <input
        id="input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <p>Reversed Value: {reversedValue}</p>
    </div>
  );
};

export default MemoizedValueExample;
