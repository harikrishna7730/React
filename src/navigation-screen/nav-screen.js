import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "../components/navbar"

const NavigationScreen=()=>{
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" Component={Navbar}   />
            <Route/>
            <Route/>
            <Route/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default NavigationScreen