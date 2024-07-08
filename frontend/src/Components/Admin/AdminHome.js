import React from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ViewListIcon from '@mui/icons-material/ViewList';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const AdminHome = () => {
  const navigate = useNavigate();

  return (
    <div className='bg-slate-100 h-full'>
      <h1 className='text-4xl font-semibold text-center pt-5'>Administration Section</h1>

      <div className='flex justify-around mt-20'>
        <Button variant="contained" startIcon={<ViewListIcon />} onClick={() => navigate("/admin/viewEmployees")}>View Employees</Button>
        <Button variant="contained" startIcon={<AddIcon />} onClick={() => navigate("/admin/addEmployee")}>Add Employee</Button>
        <Button variant="contained" startIcon={<UpdateIcon />} onClick={() => navigate("/admin/updateEmployee")}>Update Employee Details</Button>
        <Button variant="contained" startIcon={<DeleteIcon />} onClick={() => navigate("/admin/deleteEmployee")}>Delete Employee</Button>
      </div>

      <Outlet />
    </div>
  )
}

export default AdminHome;