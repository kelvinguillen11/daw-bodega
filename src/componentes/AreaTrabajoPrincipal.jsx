import "../hojas-de-estilo/areaTrabajoPrincipal.css";
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
            <button type="button" className="btn btn-primary">Salir</button>
        </div>
        </header>
        <main className="Contenedor-trabajo-Principal">
           
          <FormularioProducto/> 
            <TablaInventario/>
        </main>
        </>
    );
}

export default AreaTrabajoPrincipal;