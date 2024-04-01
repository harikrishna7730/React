import { arrayOfObjects } from "./data";
import { TableRow } from "./tablerow";

const Table = () => {
  return (
    
<table>
  <tbody>
    <tr>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
      <th>Name</th>
    </tr>
    {
        arrayOfObjects.map(eachvalue=>{
       return(
        <TableRow  data={eachvalue}  extra={"prabhas"}/>
       )
        })
    }
    
  </tbody>
</table>

   
  )
  

};

export default Table;
