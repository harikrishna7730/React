import Stage3 from "./prop3"

const Stage2=(get)=>{
    return(
        <>
        <h1>parent prop-2 : {get.name} </h1> 
        <Stage3 name="Abhi"/>  
        </>
    )
}
export default Stage2