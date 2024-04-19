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
const useReducerExample=()=>{

    const[currentvalue,dispatchvalue]=useReducer(reducerFuction,InitialValue)

    return(
        <>
        <h1>{currentvalue.name}</h1>
        <button>change Name</button>
        <br></br>
        <p></p>
        <h1>{currentvalue.age}</h1>
        <button>increment age</button> 
        <button>decrement age</button>
        <br></br>
        <p></p>
        <h1>{currentvalue.count}</h1>
        <button>increment count</button>
        <button>decrement count</button>
        <button>Reset count</button>
        </>
    )
}
export default useReducerExample