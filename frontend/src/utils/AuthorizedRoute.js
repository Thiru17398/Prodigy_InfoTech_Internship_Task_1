import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AuthorizedRoute = ({children}) => {

    var [state,setState] = useState({authorized:false});

    async function fetch(){
      await axios.get("http://localhost:5000/admin").
      then(res => setState(res.data)).catch(e => console.log(e));
      }

    useEffect(() => {
      fetch();
    }, [state.authorized]);
        
    

    if(!state.authorized)
        return <h1>Permission Denied</h1>

  return (
    children
  );
}

export default AuthorizedRoute;