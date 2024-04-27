import { Navbar } from "react-bootstrap"
import NavbarSection from "../components/navbar"
import { useDispatch, useSelector } from "react-redux"

import { todoActionAdd } from "../redux/action/action.js"

const AboutPage=()=>{

    const{todos}=useSelector(state=>state)
    const dispatch=useDispatch()


    const Addtodos=()=>{
       dispatch(todoActionAdd())
    }

    return(
        <>
        <NavbarSection/>
        <h1>About page....</h1>
        <button onClick={Addtodos}>Add todos</button>
        {/* {
            todos.map(todos=>{
            return(
                <>
                <h1>{todos}</h1>
               
                <h1>count:{todos}</h1>
                </>
            )
            })
        } */}

        </>
    )
}
export default AboutPage