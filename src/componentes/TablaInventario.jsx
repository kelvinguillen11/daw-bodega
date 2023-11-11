import TableRowVenta from "./TableRowVenta";
import FormularioProducto from "./FormularioProducto";
import { useTable } from "../services/hooks/useTable";
import { useEffect, useState} from "react";
import {toast,Toaster} from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
function TablaInventario(){
  const [myArraySellers,newVenta,eliminateRow,getLocalStorage] = useTable([]);
  const [notify,setNotify] = useState(false); 
 
  useEffect(()=>{
      getLocalStorage();
  },[]);

const notifySuccessVenta = () => toast.success('Datos cargados desde la web');
const notifyErrorVenta = () => toast.error('Ha ocurrido un error,intentalo mas tarde');

const navigate = useNavigate();
const goToApi = () => navigate('/Area-Trabajo/DatosWeb');
  return(
      <main className="Contenedor-trabajo-Principal">
      <div className="container-xl mt-5 mb-5">
      <FormularioProducto
      setNewVenta={newVenta}
      />
      </div>
      <div className="container-xxl border border-black rounded-2 mt-5 mb-5">
          <h3>Opciones de datos:</h3>
          <div className="d-sm-flex flex-sm-column justify-content-center">
            <span>cargar datos desde la Web</span>
            <button className="btn btn-success" onClick={goToApi}>Datos desde la web</button>
          </div>
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
<Toaster/>
</main>
    );
}
export default TablaInventario;