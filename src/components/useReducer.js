import { useReducer } from "react"

//reducerFuction as -->1)First argument.
 const reducerFuction=(state,action)=>{

    switch(action){
        case "increment_age":
        return {...state,age:state.age+10}

        case "decrement_age":
         return{...state,age:state.age-10}

        case "increment_count":
         return{...state,count:state.count+10}

        case "decrement_count":
        return{...state,count:state.count-10}

        case "reset_count":

        return{...state,count:10}

        case "change_name":
        return{...state,name:"Harikrishna"}
        default :
            return
    }
 }
//Initial values as -->2)second argument.
 const InitialValue={
     name:"abhi",
     age:22,
     count: 10,
     salary:7000,
     subjects:[1,3,4]
 }

 //useReducer --->component
const UseReducerExample=()=>{

    const[currentvalue,dispatchvalue]=useReducer(reducerFuction,InitialValue)


    const incrementAge=()=>{
        dispatchvalue({type:"increment_age"})
    }
    const decrementAge=()=>{
        dispatchvalue({ type:"decrement_age"})
    }
    const ResetCount=()=>{
        dispatchvalue({type:"reset_count"})
    }
    const incrementCount=()=>{
         dispatchvalue({ type:"increment_count"})
     }
     const DecrementCount=()=>{
         dispatchvalue({type:"decrement_count" })
     }

     const ChangeName=()=>{
         dispatchvalue({type:"change_name"})
     }
     

    return(
        <>
        <h1>{currentvalue.name}</h1>
        <button onClick={ChangeName}>change Name</button>
        <br></br>
        <p></p>
        <h1>{currentvalue.age}</h1>
        <button onClick={incrementAge}>increment age</button> 
        <button onClick={decrementAge}>decrement age</button>
        <br></br>
        <p></p>
        <h1>{currentvalue.count}</h1>
        <button onClick={incrementCount}>increment count</button>
        <button onClick={DecrementCount}>decrement count</button>
        <button onClick={ResetCount}>Reset count</button>
        </>
    )
}
export default UseReducerExample