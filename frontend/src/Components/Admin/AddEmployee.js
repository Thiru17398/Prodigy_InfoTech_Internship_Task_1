import {React , useState} from 'react';
import EmployeeForm from './EmployeeForm';
import axios from 'axios';

const AddEmployee = () => {

  

    const addEmployee = async (data) => {
      var response;
        await axios.post('http://localhost:5000/admin/addEmployee',data)
        .then(res => response = res).catch(e => response = e);
        if(response.statusText === 'OK')
          alert(response.data.message);

    }

  return (
    <EmployeeForm heading={"Employee Registration"} submitValue = {"Add"} actionHandler = {addEmployee}/>
  )
}

export default AddEmployee