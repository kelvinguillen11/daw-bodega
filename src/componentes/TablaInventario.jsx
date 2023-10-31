import TableRowVenta from "./TableRowVenta";
import '../services/Ventas/ventasUtils'
import { obtainValueByApi } from "../services/Ventas/ventasUtils";
import { useState, useEffect} from "react";
function TablaInventario(){
const [myArraySellers,setMyArraySellers] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await obtainValueByApi();
      setMyArraySellers(data);
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  fetchData();
}, []);
    return(
        <table className="table">
  <thead className="bg-dark text-white">
    <tr>
      <th scope="col">ID Producto</th>
      <th scope="col">Nombre</th>
      <th scope="col">Precio Unitario</th>
      <th scope="col">Cantidad Vendida</th>
      <th scope="col">Descripcion</th>
      <th scope="col">Categoria</th>
      <th scope="col"colSpan="2">Opciones</th>
    </tr>
  </thead>
  <tbody>
    { myArraySellers.map(venta => (<TableRowVenta key={venta.id} item={venta}/>)
    )}
  </tbody>
    
</table>
    );
}
export default TablaInventario;