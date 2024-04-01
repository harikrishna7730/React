import { employees } from "./dev-list"

export const EmployesList=()=>{

    return(
        employees.filter(value=>value.designation=="angular developer").map(value=>{
          return(
            <>
           <h2>name:  { value.name}</h2>
           <h2>designation:  { value.designation}</h2>
           <h2>salary:  { value.salary}</h2>
           </>
          )
        })
    )
}
