import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homescreen from "../pages/home"
import Aboutscreen from "../pages/about"
import Contactscreen from "../pages/contact"


const Allnavigations=()=>{

    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" Component={Homescreen}/>
            <Route path="/contact" Component={Contactscreen}/>
            <Route path="/About" Component={Aboutscreen}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default Allnavigations