import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';

function PrivateRoute () {
  const cookies = new Cookies();
  return cookies.get("token") ? <Outlet/> : <Navigate to={"/"}/>;
  
}
export default PrivateRoute;