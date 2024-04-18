import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "../pages/homeScreen"
import ContactScreen from "../pages/contactScreen"
import AboutScreen from "../pages/aboutscreen"
import { createContext } from "react"


const changeColor=createContext()

const Navigations=()=>{
  
 

    return(
      <changeColor.Provider value={{
        backgoundColor:"red"
      }} >
        <BrowserRouter>
        <Routes>
            <Route path="/" Component={HomeScreen}/>
            <Route path="/contact" Component={ContactScreen} />
            <Route path="/About"  Component={AboutScreen} />
        </Routes>
        </BrowserRouter>
        </changeColor.Provider>
        

    )
}
export default Navigations