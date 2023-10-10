import '../hojas-de-estilo/encabezadoPrincipal.css';
function EncabezadoPrincipal(){
    return(
    <header className="menu-contenedor">
            <div className="logo-contenedor">
            <div className="logo">
                <img src="" alt="Imagen " srcset=""/>
            </div>
             <ul className="navegacion-contenedor">
                <li><a href="#">sobre nosotros</a></li>
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
    );
}

export default EncabezadoPrincipal;