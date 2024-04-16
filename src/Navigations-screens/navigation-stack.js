import { BrowserRouter, Route, Routes } from "react-router-dom"
import ContactScreen from "../Pages/Contact"
import HomeScreen from "../Pages/Home-screen"
import InvalidScreen from "../Pages/invalid-screen"


const Navigation=()=>{
    return(
        <BrowserRouter>
         <Routes>
            <Route path="/" Component={HomeScreen}/>
            <Route path="/contact" Component={ContactScreen}/>
            <Route path="*" Component={InvalidScreen}/>
         </Routes>
        </BrowserRouter>
    )
}
export default Navigation