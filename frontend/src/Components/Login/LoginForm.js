import React, { useState } from 'react'
import Login from './Login';
import SignUp from './SignUp';
import { useNavigate , useParams } from 'react-router-dom';

const LoginForm = () => {

  const navigate = useNavigate();
  const [isLogin , setLogin] = useState("login");

  return(
    <div className=" flex justify-center items-center bg-slate-100 h-screen w-screen">
    
      <div className='grid justify-center  border-2 border-black w-[500px] rounded-[10px] box-border ' >
      <div className='flex justify-between '>
        <div className='px-[60px] py-5 w-[250px] cursor-pointer border-r-2 border-b-2 text-center hover:bg-slate-200 hover:rounded-tl-[10px] hover:border-l-2 border-black box-border' onClick={() => setLogin("login")}>
          Log In
        </div>
        <div className='px-[60px] py-5 w-[250px]  cursor-pointer border-b-2 text-center hover:bg-slate-200 hover:rounded-tr-[10px] hover:border-r-2 border-black box-border' onClick={() => setLogin("signup")}>
          Sign Up
        </div>
      </div>
      {isLogin === 'login' && <Login />}
      {isLogin === 'signup' && <SignUp /> }
    </div>
    </div>
  );
}

export default LoginForm;