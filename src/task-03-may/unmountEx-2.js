import React, { useState, useEffect } from 'react';

function KeyboardEventHandler() {
  const [pressedKey, setPressedKey] = useState(null);

  // Event handler function for keydown event
  const handleKeyDown = (event) => {
    setPressedKey(event.key);
  };

  // useEffect with cleanup function
  useEffect(() => {
    // Function to add event listener when component mounts
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup function
    return () => {
      // Function to remove event listener when component unmounts
      window.removeEventListener('keydown', handleKeyDown);
      console.log('Component is unmounting. Keydown event listener removed.');
    };
  }, []); // Empty dependency array means this effect runs only once (on mount)

  return (
    <div>
      <h1>Keyboard Event Handler</h1>
      <p>Press any key to see the pressed key</p>
      {pressedKey && <p>Pressed Key: {pressedKey}</p>}
    </div>
  );
}

export default KeyboardEventHandler;
