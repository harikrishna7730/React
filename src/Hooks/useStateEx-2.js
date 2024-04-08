import { useState } from "react"

const Example2 = ()=>{

   const btn={
      padding:"10px 20px 10px 20px",
      margin:"20px",
      borderRadius: "8px",
      fontWeight:"bold"
    }
    const[fruit,setFruit]=useState(["apple"])

//adding the fruits using spread operator
    const addFruit=()=>{
        const newitem=[...fruit,"pineapple"]
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
        <h1>useState Example2</h1>
        <button onClick={addFruit} style={btn}>addFruit</button>
        {
            fruit.map((val,index)=> {
             return(
                    <>
                    <h3 key={index}>{val}</h3>
                    <button onClick={()=>updateFruit(index)} style={btn}>Update</button>
                    <button onClick={()=>DeleteFruit(index)} style={btn}>Delete</button>
                    </>
             ) 
            })
            
        }
        </>
    )
}
export default Example2