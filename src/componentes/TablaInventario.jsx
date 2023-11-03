import TableRowVenta from "./TableRowVenta";
import FormularioProducto from "./FormularioProducto";
import { useTable } from "../services/hooks/useTable";
import { useEffect} from "react";
function TablaInventario(){
 const [myArraySellers,newVenta,eliminateRow,fetchData] = useTable([]);
  
 useEffect(() => {
  fetchData();
}, []);

    return(
      <main className="Contenedor-trabajo-Principal">
      <div className="container-xl mt-5 mb-5">
      <FormularioProducto
      setNewVenta={newVenta}
      />
      </div>
      <div className="container-xxl border border-black rounded-2 mt-5 mb-5">
        <table className="table">
  <thead className="">
    <tr>
      <th scope="col">ID Producto</th>
      <th scope="col">Nombre</th>
      <th scope="col">Precio Unitario</th>
      <th scope="col">Cantidad Vendida</th>
      <th scope="col" >Descripcion</th>
      <th scope="col">Categoria</th>
      <th scope="col" colSpan='2'>Opciones</th>
    </tr>
  </thead>
  <tbody>
    { 
    myArraySellers.map(venta => (<TableRowVenta key={venta.id} item={venta} eliminate={eliminateRow}/>)
    )
    }
  </tbody>
    
</table>
</div>
</main>
    );
}
export default TablaInventario;