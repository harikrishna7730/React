import { combineReducers } from "redux";
import ProductsReducer from "../reducer/products";
import profileReducer from "../reducer/profileReducer";


export const MainReducer=combineReducers(
{
    Products:ProductsReducer,
    profile:profileReducer
}
    
)
   

 

    
