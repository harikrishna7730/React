import { Navbar } from "react-bootstrap"
import NavbarSection from "../components/navbar"
import { useDispatch } from "react-redux"
import { todoActionAdd } from "../redux/action/action"

const ContactPage=()=>{
    const dispatch =useDispatch()

    const Addtodos=()=>{
        dispatch(todoActionAdd())
    }

    return(
        <>
        <NavbarSection/>
        <h1>Contact page...</h1>
        <button onClick={Addtodos}>Add todos</button>
        </>
    )
}
export default ContactPage