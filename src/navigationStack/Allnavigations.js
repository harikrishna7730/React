import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homescreen from "../pages/home"
import Aboutscreen from "../pages/about"
import Contactscreen from "../pages/contact"
import { createContext, useState } from "react"
import CardItemss from "../pages/Cart-Items"


export const DataShare=createContext()

const Allrouters=()=>{
    const[carditems,setcardItems]=useState([])

    const AddtoCard=(eachItem)=>{
        setcardItems([...carditems,eachItem])
    }

    return(
        <>
        <DataShare.Provider value={{
            carditems,
            AddtoCard
        }}>
        <BrowserRouter>
        <Routes>
            <Route path="/" Component={Homescreen}/>
            <Route path="/contact" Component={Contactscreen}/>
            <Route path="/About" Component={Aboutscreen}/>
            <Route path="/cardItemss" Component={CardItemss}/>
        </Routes>
        </BrowserRouter>
        </DataShare.Provider> 
        </>
    )
}
export default Allrouters