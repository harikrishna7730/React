import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "../pages/homescreen"
import AboutPage from "../pages/aboutScreen"
import ContactPage from "../pages/contactScreen"

const NavigationStack=()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" Component={HomeScreen}/>
            <Route path="/about" Component={AboutPage}/>
            <Route path="/contact" Component={ContactPage}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default NavigationStack