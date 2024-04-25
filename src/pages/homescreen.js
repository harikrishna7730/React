 import { Navbar } from "react-bootstrap"
 import useCounter from "../components/useCounter"
import NavbarSection from "../components/navbar"

 const HomeScreen=()=>{

    const[countage,incrementAge,decrementage,reset]=useCounter(100,10)
    return(
        <>
        <NavbarSection/>
        <h1>AGE: {countage}</h1>
        <button onClick={incrementAge}>Increment Age</button> 
         <button onClick={decrementage}>decrement Age</button>
         <button onClick={reset}>Reset</button>
        </>
    )
 }
 export default HomeScreen