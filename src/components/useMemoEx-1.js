// import React, { useState, useMemo } from 'react';

import { useMemo, useState } from "react"

// const UsememoExample1 = () => {
//   const [number1, setNumber1] = useState(0);
//   const [number2, setNumber2] = useState(0);

//   // Memoize the result of adding two numbers
//   const sum = useMemo(() => {
//     console.log('Calculating sum...');
//     return number1 + number2;
//   }, [number1, number2]);

//   const handleNumber1Change = (e) => {
//     setNumber1(parseInt(e.target.value));
//   };

//   const handleNumber2Change = (e) => {
//     setNumber2(parseInt(e.target.value))
//   };

//   return (
//     <div>
//       <h2>Number 1:</h2>
//       <input
//         type="number"
//         value={number1}
//         onChange={handleNumber1Change}
//       />
//       <h2>Number 2:</h2>
//       <input
//         type="number"
//         value={number2}
//         onChange={handleNumber2Change}
//       />
//       <h2>Sum: {sum}</h2>
//     </div>
//   );
// };

// export default UsememoExample1;

const UsememoExample1=()=>{

const[num1,setnum1]=useState("")
const[num2,setnum2]=useState("")

const sum=useMemo(()=>{
    return num1 +num2
},[num1,num2])

const HandleChanges1=(e)=>{
    setnum1(parseInt(e.target.value))
}
const HandleChanges2=(e)=>[
    setnum2(parseInt(e.target.value))
]


    return(
        <>
        <h2>number 1:</h2>
        <input
        type="number"
        value={num1}
        onChange={HandleChanges1}
        />
        <h2>number 2:</h2>
        <input
        type="number"
        value={num2}
        onChange={HandleChanges2}
        />

        <br></br>
        <h2>sum: {sum}</h2>
        </>
    )

}
export default UsememoExample1
