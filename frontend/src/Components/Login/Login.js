import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {useForm} from "react-hook-form";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import axios from "axios";
import { useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';

const Login = () => {
    const inputStyle = "m-4 border-2 border-black rounded pl-1 box-border";

    const user = useSelector(state => state.user);
    const navigate = useNavigate();

    const {register  , handleSubmit,setError , formState :{ errors }} = useForm();

    const[showPassword,setShowPassword] = useState(false);

    const toggleVisibilty = () => {
        setShowPassword(!showPassword);
    }

    async function login(data){
        var response;
        await axios({
            method:'post',
            url:'http://localhost:5000/login',
            data:data,
            withCredentials:true
        })
        .then(res => response = res.data).catch(e => response = e.response.data);
        user.state.isAuthenticated = response.isAuthenticated;
        console.log(response);
        if(user.state.isAuthenticated)
            navigate("/"+ response.role);
        else{
            if(response.message === "Invalid Password")
            setError("password" , {
            type:"manual",
            message:response.message
            });
            else{
                setError("username" ,{
                    type:'manual',
                    message:response.message
                })
            }        
        }
    }

  return (
        <form className=' py-[40px] rounded-b-[10px] border-x-2 border-black grid bg-white gap-4'  method='post'>
            <div className='mx-auto h-[110px] w-[244px]'>
                <div className='flex gap-2'>
                    <AccountCircleIcon />
                    <label>Username </label>
                </div>
                <div className='flex'>
                    <input type='text' className={inputStyle} {...register("username" , {required:"Username is required"})}  />
                </div>
                {
                errors.username &&
                <div className='w-max flex align-center gap-1 ml-4'>
                <ErrorOutlineIcon sx={{alignSelf:"center" , color:"red"}} />
                <p className='text-red-500'>{errors.username?.message}</p>
                </div>
                }
            </div>
            
            <div className='mx-auto h-[110px]'>
                <div className='flex gap-2'>
                    <LockIcon />
                    <label>Password</label>
                </div>
                <div className='flex align-content-center'>
                    <input className={inputStyle} type={showPassword ? "text" : "password"} {...register("password" , {required:"Password is required" , minLength:8,})} />
                    <div onClick={toggleVisibilty}>
                    <VisibilityOffIcon sx={{marginTop:"16px",cursor:"pointer"}}/>
                    </div>
                </div>
                {
                    errors.password &&
                    <div className='w-max flex gap-1 ml-4'>
                        <ErrorOutlineIcon sx={{alignSelf:"center" , color:"red"}} />
                        <p className='text-red-500'>{errors.password?.message}</p>
                    
                    </div>
            }
            </div>
            <Button variant='contained'sx={{width:"100px",margin:"0px auto"}} onClick={handleSubmit(login)} >LOGIN</Button>
        </form>
  );
}

export default Login;