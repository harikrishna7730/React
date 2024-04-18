import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavbarSection from "../components/navbar"


const NavigationScreen=()=>{
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/"Component={NavbarSection}/>
            <Route/>
            <Route/>
            <Route/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default NavigationScreen