

const ReducerFunction=(state,action)=>{
    switch(action.type){
        case "INCREMENT":
        return{...state,age:state.age+10}
        case "DECREMENT":
        return{...state,age:state.age-10}
        case "CHANGE_NAME":
        return{...state,name:"hariKrishnaaa"}
        default :
        return state
    }
}

export default ReducerFunction