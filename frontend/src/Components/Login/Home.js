import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate , useLocation } from 'react-router-dom';

const Home = () => {

  const [state,setState] = useState({authenticated:true});
  let location = useLocation();

  async function fetch(){
    await axios.get("http://localhost:5000/")
    .then(res => setState(res.data)).catch(e => console.log(e));
  }

  useEffect(()=>{
    fetch();
  },[state.authenticated]);

  if(!state.authenticated)
      return <Navigate to={"/login"} state={{from:location}} replace/>


  
  return (
    <div>User Home</div>
  )
}

export default Home;