import { useMemo, useState } from "react";

const ContactScreen = () => {
  const [count1, setCount] = useState(10);
  const [count2, setCount2] = useState(100);

  const checkEven = useMemo(() => {
    console.log("checkEven");

    for (let i = 0; i < 10000; i++) {}

    return count1 % 2 === 0 ? "Even" : "Odd";
  }, [count1]);

  const incrementCount1 = () => {
    setCount(count1 + 1);
  };

  const incrementCount2 = () => {
    setCount2(count2 + 1);
  };

  return (
    <>
      <h1>Profile information</h1>
      {checkEven}
      <button onClick={incrementCount1}>Count1 {count1}</button>
      <button onClick={incrementCount2}>Count2 {count2}</button>
    </>
  );
};

export default ContactScreen;

