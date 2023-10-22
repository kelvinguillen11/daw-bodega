
import { Link} from 'react-router-dom';
import LogoBodega from '../img/Logo-bodega.png';

function HeaderPrincipal(){
    return(

    <header className="menu-contenedor">
            <div className="logo-contenedor">
            <div className="logo">
               <Link to="/"><img src={LogoBodega} alt="Imagen logo " srcset=""/></Link>
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
}
export default HeaderPrincipal;