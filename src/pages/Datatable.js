import React from 'react'
import { useState } from "react"

const Datatable = (props) => {
  console.log(props)
    const [table,setTable] = useState([props])
 
console.log(table)

    const handleRemove = (index) =>{
        let total = [...table]
        total.splice(index,1)
        setTable(total)
    }


  return (
    <div>
    <table style={{ border: "1px solid black" }}>
    <thead>
        <tr>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
{table.map((e,index)=>{return(
  <tr>
  
  <td>{console.log(e)}</td>
  
  
  
  </tr>)
  
}
  
  )}
    
    </tbody>

</table>

    </div>
  )
}

export default Datatable
