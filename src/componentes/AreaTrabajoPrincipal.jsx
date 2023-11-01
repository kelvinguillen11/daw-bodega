import { Link } from "react-router-dom";
import "../hojas-de-estilo/areaTrabajoPrincipal.css";
import FooterPrincipal from "./FooterPrincipal";
import FormularioProducto from "./FormularioProducto";
import TablaInventario from "./TablaInventario";
function AreaTrabajoPrincipal(){
    return(
        <>
        <header className="container-xxl bg dark header-Principal bg-dark text-white">
        <div className="">
        <h4>Bienvenido, usuario 32</h4>
        </div>
        <div>
            <Link to="/"><button type="button" className="btn btn-primary  rounded-4">Salir</button></Link>
        </div>
        </header>
        
           
         <TablaInventario/>  
       
        <FooterPrincipal/>
        </>
    );
}

export default AreaTrabajoPrincipal;