import '../hojas-de-estilo/encabezadoPrincipal.css';
function EncabezadoPrincipal(){
    return(
    <header class="menu-contenedor">
            <div class="logo-contenedor">
            <div class="logo">
                <img src="" alt="Imagen " srcset=""/>
            </div>
             <ul class="navegacion-contenedor">
                <li><a href="#">Sobre nosotros</a></li>
                <li><a href="#">contactenos</a></li>
             </ul>
            </div>
           <nav class="navegacion">
               <ul class="navegacion-contenedor">
                   <li><a href="#">iniciar sesion</a></li>
                   <li><a href="#">Registrarse</a></li>
                </ul>
           </nav>
    </header>
    );
}

export default EncabezadoPrincipal;