import { useContext } from "react"
import NavbarSection from "../components/navbar"
import { changeings } from "../NavigationStack/Allnavigations"

const HomeScreen=()=>{
const {data,ChangeData}=useContext(changeings)
const {color,changeColor}=useContext(changeings)

const black={
    heigth:"200px",
    width:"300px",
    marginTop:"100px",
    marginLeft:"600px",
    marginBottom:"50px",
    padding:"100px 100px 100px 100px",
    border:"2px solid black"
 }
    return(
        <>
        <NavbarSection/>
        
        <h1>wellcome to Home page  {data.name}</h1>
        <button onClick={ChangeData}>click to change the name</button>
        <br></br>
       
        <div style={{backgroundColor:color,...black}}>
        <h1>box</h1>
        </div>
        
        <button onClick={changeColor}>
            Click here to change the color
        </button>
        </>
    )
}
export default HomeScreen