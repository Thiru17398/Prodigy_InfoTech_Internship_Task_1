import React from 'react';
import { TextField } from '@mui/material';
import  {Button} from '@mui/material';


const DeleteEmployee = () => {

  

  return (
    <div className='m-10'>
    <h1 className='text-3xl font-semibold text-center'>Delete Employee</h1>
    <div className='border-1 border-black'>
        <div className='mt-10 grid'>
              <TextField
              id="filled-textarea"
              label="Employee Id"
              placeholder="Enter  Employee Id"
              multiline
              variant="filled"
              sx={{width:"40%",margin:"20px auto"}}
              />
              <Button variant="contained" sx={{width:"20%",margin:"10px auto"}} >Delete</Button>
          </div>
    </div>

    </div>
  )
}

export default DeleteEmployee