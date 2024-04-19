import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "../pages/homeScreen"
import ContactScreen from "../pages/contactScreen"
import AboutScreen from "../pages/aboutscreen"
import { createContext, useState } from "react"


export const changeings=createContext()

const Navigations=()=>{

  //for changing the color
  const[color,setcolor]=useState("black")

  const changeColor=()=>{
    setcolor("red")
 }

 //for changeing the text

  const[data,setData]=useState({
    name:"hari"
  })

  const ChangeData=()=>{
    setData({...data,name:"Abhi"})
  }


  
 

    return(
      <changeings.Provider value={{
        data,
        ChangeData,
        color,
        changeColor

      }} >


        <BrowserRouter>
        <Routes>
            <Route path="/" Component={HomeScreen}/>
            <Route path="/contact" Component={ContactScreen} />
            <Route path="/About"  Component={AboutScreen} />
        </Routes>
        </BrowserRouter>


        </changeings.Provider>
        

    )
}
export default Navigations