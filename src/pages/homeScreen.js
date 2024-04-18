import { useContext } from "react"
import Box from "../components/BlackBox"
import NavbarSection from "../components/navbar"

const HomeScreen=()=>{
    const response=useContext(changeColor)

    return(
        <>
        <NavbarSection/>
        <Box  />
        <button>
            Click here to change the color
        </button>
        </>
    )
}
export default HomeScreen