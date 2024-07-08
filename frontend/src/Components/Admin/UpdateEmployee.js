import React, { useState } from 'react'
import EmployeeForm from './EmployeeForm';
import axios from 'axios';


const UpdateEmployee = () => {

  const [response,setResponse] = useState();

    const updateEmployee = async (data) => {
        console.log(data);
        await axios.post('http://localhost:5000/admin/updateEmployee',data)
        .then(res => setResponse(res)).catch(e => setResponse(e));

        
    }

  return (
    <EmployeeForm heading={"Update Employee Details"} submitValue={"Update Details"} actionHandler = {updateEmployee}/>
  )
}

export default UpdateEmployee;