//memory leaks...
import React, { useEffect, useState } from "react";

const MemoryLeaks = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouse);

    // return () => {
    //   window.removeEventListener("mousemove", handleMouse);
    // };
  }, []); // Empty dependency array means this effect runs only once on mount and cleans up on unmount

  return (
    <>
      <h1>Mousemove</h1>
      <h2>x: {position.x} y: {position.y}</h2>
    </>
  );
};

export default MemoryLeaks;
