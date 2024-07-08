import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';

const AuthorizedRoute = ({children}) => {

    var [state,setState] = useState({authorized:false , fetched:false});

    async function fetch(){
      await axios.get("http://localhost:5000/admin").
      then(res => {
        setState({...res.data , fetched:true});

    }).catch(e => console.log(e));
      }

    useEffect(() => {
      fetch();
    }, [state.authorized]);
        
    

    if(!state.authorized)
        return <CircularProgress />

  return (
    children
  );
}

export default AuthorizedRoute;