import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Form, Table } from 'reactstrap'
// import Datatable from './Datatable';



import log from './login.module.css'
// import { useNavigate } from 'react-router-dom'

const getLocal= ()=>{
  let lists=localStorage.getItem("keys");
  if(lists){
    return JSON.parse(lists)
  }
  else{
    return []
  }
}



const Login = () => {

  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")

  //Main array of object states
  const[emailIdPass,setEmailIdPass]=useState(getLocal())

  const navigate=useNavigate()
const submitHandler=((event)=>{
  event.preventDefault();
  
  const useridPass={
    useremail:email,
    userpass:password
  }
  if(useridPass)
  {setEmailIdPass([...emailIdPass,useridPass])}

  setEmail("")
  setPassword("")
  

})
useEffect(()=>{localStorage.setItem("keys",JSON.stringify(emailIdPass))},[emailIdPass])

const handleRemove = (index) =>{
  let total = [...emailIdPass]
  total.splice(index,1)
  setEmailIdPass(total)
}





  return (

    <div>
      <div className={log.card}>
        <Form className={log.formC} onSubmit={submitHandler}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" value={email} onChange={(e) => setEmail( e.target.value )} />

          </div>
          <div class="mb-3">
            <label class="form-label">Password</label>
            <input type="password" class="form-control" value={password} onChange={(e) => setPassword(e.target.value) } />
          </div>

          <button type="submit" class="btn btn-success">Submit</button>
        </Form>
        </div>
      <div className={log.tb}>
      <Table striped bordered hover size="sm">
      <thead>
          <tr>
              <th>S.No</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
          </tr>
      </thead>
      <tbody>
  {emailIdPass.map((e,index)=>{return(
    <tr>
    <td>{index+1}</td>
    <td>{e.useremail}</td>
    <td>{e.userpass}</td>
    <td><button><i class="fa-solid fa-pen-to-square"></i></button><button onClick={() => {{ handleRemove() } }}><i class="fa-solid fa-trash"></i></button></td>
    
    
    
    </tr>)
    
  }
    
    )}
      
      </tbody>
  
  </Table>
  </div>



      {/*<Datatable xx={emailIdPass}/>*/}
    </div>
  )
}

export default Login
