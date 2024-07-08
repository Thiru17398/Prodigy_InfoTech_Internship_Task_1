import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const ViewEmployees = () => {

    const [employees,setEmployees] = useState([{
        id:100,
        name:'Thirumalai P',
        email:'thir21223.it@rmkec.ac.in',
        age:20,
        contact:6374393188
    }]);



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
                    <TableRow key={employee.id}>
                        <TableCell>{employee.id}</TableCell>
                        <TableCell>{employee.name}</TableCell>
                        <TableCell>{employee.age}</TableCell>
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

export default ViewEmployees