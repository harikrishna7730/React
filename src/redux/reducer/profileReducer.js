
 const url="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png"
const initialState={
    name:"Abhi",
    age:23,
    imgUrl:url,
    salary:30000
}

const profileReducer=(state=initialState,action)=>{
    switch(action.type){
        case "UPDATE_NAME":
        return {...state,name:state,name: "Hari"}
        case "IMAGE":
       return {...state,imgUrl:state.imgUrl}
       default :
       return state
    }
}
export default profileReducer