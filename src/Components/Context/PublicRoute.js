import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';

function PublicRoute () {
  const cookies = new Cookies();
  return cookies.get("token") ?  <Navigate to={"/Home"}/> : <Outlet/> ;
  
}
export default PublicRoute;