import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "../pages/homeScreen"
import ContactScreen from "../pages/contactScreen"
import AboutScreen from "../pages/aboutscreen"
import { createContext, useState } from "react"
import Loginpage from "../pages/Login"


export const changeings=createContext()

const Navigations=()=>{
const[login,setlogin]=useState(false)
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

       
        {
          login
          ?
          <BrowserRouter>
        <Routes>
            <Route path="/" Component={HomeScreen}/>
            <Route path="/contact" Component={ContactScreen} />
            <Route path="/About"  Component={AboutScreen} />
        </Routes>
        </BrowserRouter>
        :
        // <BrowserRouter>
        //    <Routes>
        //     <Route  path="/Login" Component={Loginpage}/>
        //    </Routes>
        // </BrowserRouter>
        // <h1> helloworkd</h1>
        <Loginpage/>
        }


        </changeings.Provider>
        

    )
}
export default Navigations