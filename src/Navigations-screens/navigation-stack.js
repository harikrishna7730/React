import { BrowserRouter, Route, Router } from "react-router-dom"
import ContactScreen from "../Pages/Contact"
import HomeScreen from "../Pages/Home-screen"
import InvalidScreen from "../Pages/invalid-screen"


const Navigation=()=>{
    return(
        <BrowserRouter>
         <Router>
            <Route path="/" Component={HomeScreen}/>
            <Route path="/contact" Component={ContactScreen}/>
            <Route path="*" Component={InvalidScreen}/>
         </Router>
        </BrowserRouter>
    )
}
export default Navigation