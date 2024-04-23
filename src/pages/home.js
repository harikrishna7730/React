// import Products from "../components/AddtoCard"
import ParentComponent from "../components/callBackEx-1"
import FoodList from "../components/foodlist"
import NavbarSection from "../components/nav-bar"
import UsememoExample1 from "../components/useMemoEx-1"
// import UseReducerExample from "../components/useReducer"


const Homescreen=()=>{
    return(
        <>
        <NavbarSection/>
        {/* <Products/> */}
        <UsememoExample1/>
        ParentComponent
        <ParentComponent/>
        {/* <FoodList/> */}
         {/* <UseReducerExample/> */}
        </>
    )
}
export default Homescreen