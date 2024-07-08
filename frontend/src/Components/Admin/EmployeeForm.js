import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';




const EmployeeForm = (props) => {

  const [values,setValues] = useState({
    employeeId:null,
    employeeName:null,
    email:null,
    dob:null,
    contact:null
  });

  const [dateob,setDob] = useState();

  function handleChange(e){
    setValues({...values , [e.target.name]:e.target.value , dob : (new Date(dateob - new Date().getTimezoneOffset() * 60000))});
  }

  function handleSubmit(){

  }


  return (
    <div className='m-10'>
        <h1 className='text-3xl font-semibold text-center'>{props.heading}</h1>
        <div className='border-1 border-black'>
          <form className='mt-10 grid'>
            
                <TextField
                error = {values.employeeId === ''}
              id="filled-textarea"
              name='employeeId'
              label="Employee Id"
              placeholder="Employee Id"
              multiline
              variant="filled"
              sx={{width:"40%",margin:"20px auto"}}
              spellCheck="false"
              InputProps={{ disableUnderline: true }}
              onChange={handleChange}
              helperText={values.employeeId === '' ? 'Required' :''}
              required
              />
              <TextField
              error={values.employeeName === ''}
              id="filled-textarea"
              name='employeeName'
              label="Employee Name"
              placeholder="Employee Name"
              multiline
              spellCheck="false"
              variant="filled"
              sx={{width:"40%",margin:"20px auto"}}
              InputProps={{ disableUnderline: true }}
              onChange={handleChange}
              helperText={values.employeeName === '' ? 'Required' : ''}
              required
              />
              <TextField
              error={values.email === ''}
              id="filled-textarea"
              label="Email Id"
              name='email'
              placeholder="Email Id"
              multiline
              variant="filled"
              spellCheck="false"
              sx={{width:"40%",margin:"20px auto"}}
              InputProps={{ disableUnderline: true }}
              onChange={handleChange}
              helperText={values.email === '' ? 'Required' : ''}
              required
              />
              <TextField
              error={values.contact === ''}
              id="filled-textarea"
              label="Contact"
              name='contact'
              placeholder="Contact"
              multiline
              variant="filled"
              spellCheck="false"
              sx={{width:"40%",margin:"20px auto"}}
              InputProps={{ disableUnderline: true }}
              onChange={handleChange}
              helperText={values.contact === '' ? 'Required' : ''}
              required
              />  
              <LocalizationProvider dateAdapter={AdapterDayjs} >
              <DemoContainer components={['DatePicker']} sx={{width:"40%",margin:"20px auto"}}>
                <DatePicker label="Date of Birth" onChange={ (value) => { 
                    setValues({...values , dob : (new Date(value - new Date().getTimezoneOffset() * 60000))});
                    }}/>
                </DemoContainer>
              </LocalizationProvider>

              <Button variant="contained" sx={{width:"20%",margin:"10px auto"}} onClick={handleSubmit}>{props.submitValue}</Button>
              
          </form>
        </div>
    </div>
  )
}

export default EmployeeForm;
