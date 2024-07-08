import React, { useState } from 'react'
import EmployeeForm from './EmployeeForm';
import axios from 'axios';


const UpdateEmployee = () => {

  const updateEmployee = async (data) => {
    var response;
      await axios.post('http://localhost:5000/admin/updateEmployee',data)
      .then(res => response = res).catch(e => response = e);
      if(response.statusText === 'OK')
        alert(response.data.message);

  }

  return (
    <EmployeeForm heading={"Update Employee Details"} submitValue={"Update Details"} actionHandler = {updateEmployee}/>
  )
}

export default UpdateEmployee;