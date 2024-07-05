import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import InputField from './InputField';
import CallIcon from '@mui/icons-material/Call';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import KeyIcon from '@mui/icons-material/Key';
import { Button } from '@mui/material';
import {useForm} from "react-hook-form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

  const {register , handleSubmit, formState :{ errors } , getValues} = useForm();
  const navigate = useNavigate();

    async function signUp(formData){
      var response;
      await axios({
        method:'post',
        url:'http://localhost:5000/register',
        data:formData,
        withCredentials:true
      })
      .then(res => response = res).catch(error => response = error);
      console.log(response);

      if(response.data.registered){
        alert('Registered Successfully');
        navigate("/login");
      }
    } 


  return (
    <form className=' py-[40px] rounded-b-[10px] border-x-2 border-black grid bg-white gap-8 justify-center'>
      <InputField PersonIcon={<PersonIcon />} labelName={"Name"}  type={"text"} register={{...register("name" , {required:true})}}/>
      <InputField PersonIcon={<EmailIcon />} labelName={"Email"}  type={"email"} register={{...register("email",{required:true})}} />
      <InputField PersonIcon={<CallIcon />} labelName={"Contact"}  type={"tel"} register={{...register("contact",{required:true})}}/>
      <InputField PersonIcon={<AccountCircleIcon />} labelName={"Username"}  type={"text"} register={{...register("username",{required:true})}}/>
      <InputField PersonIcon={<LockIcon />} labelName={"New Password"}  type={"password"} visibility={<VisibilityOffIcon />} register={{...register("newPassword",{required:true})}}/>
      <InputField PersonIcon={<KeyIcon />} labelName={"Re-Enter Password"}  type={"password"} visibility={<VisibilityOffIcon />} register={{...register("rePassword",{required:true})}} passwordMatch  = {getValues("newPassword") === getValues("rePassword")}/>
      <Button variant="contained" sx={{width:"100px",margin:"0px auto"}}  onClick={handleSubmit(signUp)} >REGISTER</Button>
    </form>
  )
}

export default SignUp;