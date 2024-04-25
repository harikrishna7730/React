
const initialState={
    todos:["apple","banana"],
    count:100
}

const todoReducer=(state=initialState,action)=>{
     switch(action){

        case "ADD_TODO":
        return {...state,todos:[...state.todos,"newTodoo"]}
        case "INCRESE_COUNT":
        return {...state,count:state.count+1}
        default :
        return state
     }

}

export default todoReducer