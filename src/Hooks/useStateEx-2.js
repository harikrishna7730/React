import { useState } from "react"
const Example2 = ()=>{

   const btn={
      padding:"10px 20px 10px 20px",
      marginLeft:"20px",
      borderRadius: "8px",
      fontWeight:"bold",
    backGroundColor:"#0066b2",
    fontSize:"20px"
    }
    const heading={
    fontSize:"40px",
    fontWeight:"bold"
  }
  const hh={
    fontSize:"30px"
  }
  const imgg={
    URL:"./apple.webp"
  }
  
    const[fruit,setFruit]=useState(["apple"])

//adding the fruits using spread operator
    const addFruit=()=>{
        const newitem=[...fruit,"Pineapple"]
        setFruit(newitem)
    }
    //updateing the fruites using index
    const updateFruit=(index)=>{
        const update=[...fruit]
        update[index]="Mango";
        setFruit(update)
    }
    //deleting the fruites using splice
    const DeleteFruit=(index)=>{
        const Delete=[...fruit]
        Delete.splice(index,1)
        setFruit(Delete)
    }
   
    return(
        <>
        <h1 style={heading}><u>Fruites</u></h1>
        <button onClick={addFruit} style={btn}>addFruit</button>
        {
            fruit.map((val,index)=> {
             return(
                    <div className="main" key={index} >
                    <h3 style={hh}>{val}</h3>
                    <button onClick={()=>updateFruit(index)} style={btn}>Update</button>
                    <button onClick={()=>DeleteFruit(index)} style={btn}>Delete</button>
                    </div>
             ) 
            })
            
        }
        </>
    )
}
export default Example2