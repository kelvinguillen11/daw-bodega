import { Link, useNavigate } from "react-router-dom";
import "../hojas-de-estilo/areaTrabajoPrincipal.css";
import FooterPrincipal from "./FooterPrincipal";
import TablaInventario from "./TablaInventario";
import { useEffect, useState } from "react";
import { getNameUser,logoutSession } from "../services/UserSession/SessionUtils";
function AreaTrabajoPrincipal(){
const [UserName,setUser] = useState();
const navigate = useNavigate();
useEffect(() =>{
    const user = getNameUser();
    setUser(user);
},[])    

const Logout = () =>{
    setUser('');
    logoutSession();
    navigate("/")
}
  return(
        <>
        <header className="container-xxl bg dark header-Principal bg-dark text-white">
        <div className="">
        <h4>Bienvenido, {UserName}</h4>
        </div>
        <div>
            <button type="button" className="btn btn-primary  rounded-4" onClick={Logout}>Salir</button>
        </div>
        </header>
        
           
         <TablaInventario/>  
       
        <FooterPrincipal/>
        </>
    );
}

export default AreaTrabajoPrincipal;

