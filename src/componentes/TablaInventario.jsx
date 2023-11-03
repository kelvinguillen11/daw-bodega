import TableRowVenta from "./TableRowVenta";
import '../services/Ventas/ventasUtils'
import {DeleteVenta, initLocalStorage} from "../services/Ventas/ventasUtils";
import { useState, useEffect} from "react";
import FormularioProducto from "./FormularioProducto";
import FormularioUD from "./FormularioUD";
import { array } from "i/lib/util";
function TablaInventario(){
const [myArraySellers,setMyArraySellers] = useState([]);
const newVenta = (NuevaVenta) =>{
  setMyArraySellers([...myArraySellers,NuevaVenta]);
}
useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await initLocalStorage();
      setMyArraySellers(data);
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  fetchData();
}, []);

 const eliminateRow = (item) =>{
  const newVentas = myArraySellers.filter(venta => venta.id !== item.id)
  setMyArraySellers(newVentas);
}
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