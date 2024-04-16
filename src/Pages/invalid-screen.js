import HomeScreen from "./Home-screen"

const InvalidScreen=()=>{


    const BackToHome=()=>{
        <HomeScreen/>
    }
    return(
        <>
        <h1>Invalid screen</h1>
        <button onClick={BackToHome}>back to home screen</button>
        </>
    )
}
export default InvalidScreen