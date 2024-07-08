import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';




const ViewEmployees = () => {

    const [employees,setEmployees] = useState([]);


    useEffect( () => {
      const  fetchEmployees = async() => {
         await axios.get("http://localhost:5000/admin/viewEmployees")
        .then(res => setEmployees(res.data)).catch(e => console.log(e));
      }
      fetchEmployees();
    },[employees.length]);


    function getAge(dateString) {
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
      }
      return age;
  }

    



  return (
    <div className='m-10'>
    <TableContainer component={Paper}>
        <Table>
        <TableHead>
          <TableRow>
          <TableCell align="left">Employee Id</TableCell>
            <TableCell align="left">Employee Name</TableCell>
            <TableCell align="left">Age</TableCell>
            <TableCell align="left">Email Id</TableCell>
            <TableCell align="left">Contact</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {
               employees.length > 0 ?  employees.map( employee => 
                    <TableRow key={employee.employeeId}>
                        <TableCell>{employee.employeeId}</TableCell>
                        <TableCell>{employee.employeeName}</TableCell>
                        <TableCell>{getAge(employee.dob)}</TableCell>
                        <TableCell>{employee.email}</TableCell>
                        <TableCell>{employee.contact}</TableCell>
                    </TableRow>
                ) : <TableRow >
                    <TableCell>No Employees Found</TableCell>
                  </TableRow>
            }
        </TableBody>
        </Table>
    </TableContainer>
    </div>
  )
}

export default ViewEmployees;