
import { Link} from 'react-router-dom';
import LogoBodega from '../img/Logo-bodega.png';
import {getSessionUser, logoutSession } from "../services/UserSession/SessionUtils";
import { useEffect, useState } from 'react';

function HeaderPrincipal(){
   const [User,setUser]= useState();
   useEffect(()=>{
      const User = getSessionUser();
      setUser(User);
   },[]);

   const Logout = ()=>{
      setUser('');
      logoutSession();
   }
   if (!User) {
      return(

         <header className="menu-contenedor">
                 <div className="logo-contenedor">
                 <div className="logo">
                    <Link to="/"><img srcSet={LogoBodega} alt="Imagen logo " /></Link>
                 </div>
                  <ul className="navegacion-contenedor">
                     <li><Link to="/SobreNosotros">Sobre nosotros</Link></li>
                     <li><Link to="/contacto">Contactanos</Link></li>
                  </ul>
                 </div>
                <nav className="navegacion">
                    <ul className="navegacion-contenedor">
                        <li><Link to="/login">iniciar sesion</Link></li>
                        <li><Link to="/registro">registrarse</Link></li>
                     </ul>
                </nav>
         </header>
      
         );
   } else {
   
      return(

         <header className="menu-contenedor">
                 <div className="logo-contenedor">
                 <div className="logo">
                    <Link to="/"><img srcSet={LogoBodega} alt="Imagen logo " /></Link>
                 </div>
                  <ul className="navegacion-contenedor">
                     <li><Link to="/SobreNosotros">Sobre nosotros</Link></li>
                     <li><Link to="/contacto">Contactanos</Link></li>
                  </ul>
                 </div>
                <nav className="navegacion">
                    <ul className="navegacion-contenedor-User">
                        <li><span>has iniciado sesion como {User}</span></li>
                        <li><Link to="/Area-Trabajo">Area de trabajo</Link></li>
                        <li onClick={Logout}><span>Cerrar sesion</span></li>
                     </ul>
                </nav>
         </header>
      
         );
   } 
  
}
export default HeaderPrincipal;