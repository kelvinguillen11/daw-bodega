import {Navigate, Outlet } from "react-router-dom"
import { getSessionUser } from "../services/UserSession/SessionUtils";

const getUser = () =>{
   const User = getSessionUser();
   return User;
}
export const ProtectedRoute = ({ redirectPath = "/"})=>{
   const user = getUser();
    if(!user)
    {
       return <Navigate to={redirectPath}/>
    }
    return <Outlet/>;
}

export const ProtectedLogin = ({redirectPath = "/"})=>{
   const user = getUser();
   if(user)
   {
      return <Navigate to={redirectPath}/>
   }
   
   return <Outlet/>;

}