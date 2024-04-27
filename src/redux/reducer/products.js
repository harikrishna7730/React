const initialState={
    products:[],
    error:"error"
}

const ProductsReducer=(state=initialState,action)=>{

    switch(action.type){
        case "PRODUCTS_SUCCESS":
        return {...state,products:action.payload}
        case "FAILURE":
        return {...state,error:action.payload}
        default :
        return state
    }
}

export default ProductsReducer