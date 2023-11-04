import { Navigate } from "react-router-dom"
import { getSessionUser } from "../services/UserSession/SessionUtils";

export const ProtectedRoute = ({children,redirectPath = "/"})=>{
   const user = getSessionUser();
   console.log(user);
    if(!user)
    {
       return <Navigate to={redirectPath}/>
    }
    return children;
}