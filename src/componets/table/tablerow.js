

export const TableRow =(prop)=>{
  const {data,extra}=prop

    return(
            <tr>
            <td>{data[0]}</td>
            <td>{data[1]}</td>
            <td>{data[2]}</td>
            <td>{extra}</td>
          </tr>

    )
}