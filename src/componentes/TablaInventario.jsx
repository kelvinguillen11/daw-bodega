import TableRowVenta from "./TableRowVenta";
import FormularioProducto from "./FormularioProducto";
import { useTable } from "../services/hooks/useTable";
import { useEffect, useState} from "react";
import {Toaster} from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { convertJsonToExcel } from "../services/Excel/excelUtils";
import { notifyErrorImport, notifyErrorLoad, notifySuccessImport, notifySuccessLoad } from "../Notificaciones/Tabla-Inventario/Notificaciones";
function TablaInventario(){
  const [myArraySellers,newVenta,eliminateRow,getLocalStorage,resetWS] = useTable([]);
  const [notify,setNotify] = useState(false); 
  useEffect(()=>{
    const data = async () =>{
    try {
        await getLocalStorage();
        setNotify(true);
      } catch (error) {
        setNotify(false);
      } 
    }
    data();
  },[]);

  useEffect(()=>{
    if(notify)
    {
      console.log(myArraySellers.length);
      (myArraySellers !==null)? notifySuccessLoad() : notifyErrorLoad();
    }
  },[notify]);

const navigate = useNavigate();
const goToApi = () => navigate('/Area-Trabajo/DatosWeb');

const excelImport = () =>{
  if(myArraySellers.length >= 3)
  {
    convertJsonToExcel();
    resetWS();
    notifySuccessImport()
  }  
  else
  {
    notifyErrorImport();
  }
}

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
          <div className="d-sm-flex flex-sm-column justify-content-center">
            <span>exportar datos a Excel.</span>
            <div className="btn btn-success" onClick={excelImport}>Excel</div>
            <button></button>
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