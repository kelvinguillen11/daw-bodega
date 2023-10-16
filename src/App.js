import React from 'react';
import './App.css';
import PaginaPrincipal from './componentes/PaginaPrincipal';
import { Link,BrowserRouter,Route,Routes } from 'react-router-dom';
import LogoBodega from './img/Logo-bodega.png';
import SobreNosotros from './componentes/SobreNosotros';
function App() {
  return (
    <BrowserRouter>
    <header className="menu-contenedor">
            <div className="logo-contenedor">
            <div className="logo">
               <Link to="/"><img src={LogoBodega} alt="Imagen logo " srcset=""/></Link>
            </div>
             <ul className="navegacion-contenedor">
                <li><Link to="/SobreNosotros">Sobre nosotros</Link></li>
                <li><a href="#">contactenos</a></li>
             </ul>
            </div>
           <nav className="navegacion">
               <ul className="navegacion-contenedor">
                   <li><a href="#">iniciar sesion</a></li>
                   <li><a href="#">registrarse</a></li>
                </ul>
           </nav>
    </header>
    <Routes>
        <Route path='/' element={<PaginaPrincipal/>}/>  
        <Route path='/SobreNosotros' element={<SobreNosotros/>}/>     
    </Routes>
    </BrowserRouter>
  );
}

export default App;
