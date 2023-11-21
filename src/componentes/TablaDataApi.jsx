import { useEffect, useState} from "react";
import {toast,Toaster} from 'react-hot-toast';
import TableRowApi from "./TableRowApi.jsx";
import { UseDataAPi } from "../services/hooks/useDataApi";
import { addRowsToWs } from "../services/Api/apiUtils";
import { useSelectedR } from "../services/hooks/useSelectedR";
import { ConfirmDataApi } from "./ElementosBoton.jsx";
import { useNavigate } from "react-router-dom";
function TablaDataApi () {
 const [Data, fetchData] = UseDataAPi([]);
 const [notify,setNotify] = useState(false);
 const [rowSelected,cancelSelection,rowClick,resetSelect] = useSelectedR([]);
    useEffect(() => {
    const dataNotify = async () =>{
     try {
       await fetchData();
       setNotify(true);
     } catch (error) {
       setNotify(true);
     }
   };
     dataNotify();
   },[]);
   
   useEffect(() => {
     if(notify)
     {
       (Data.length !==0)? notifySuccessApi(): notifyErrorApi();
     }
    },[notify]);
   
   const notifySuccessApi = () => toast.success('Datos cargados desde la web');
   const notifyErrorApi = () => toast.error('Ha ocurrido un error,intentalo mas tarde');
   
 
  const navigate = useNavigate();

   const addRows =  () => {
    if(rowSelected.length !==0){
      addRowsToWs(rowSelected);
      resetSelect();
      notifySucessData();
      navigate('/Area-Trabajo');
    }
    else
    {
      notifyerrorData();
    }  
    
   }
   const notifySucessData = () => {toast.success('Datos guardados en su Area de trabajo.')};
   const notifyerrorData = () => {toast.error('No hay datos para importar, seleccione al menos uno.')};
   return(
    <main className="Contenedor-trabajo-Principal">
      <div className="container-xl mt-5 mb-5 bg-success border rounded">
     <h2 className="fs-1 text-center">Importar datos desde la web</h2>
      </div>
      <div className="container-xl mt-5 mb-5 border ">
        <p>El siguiente apatardo muestra todos los datos que han podido ser rescatados de nuestra base de datos, el cual se pone a disposicion de cada 
          usuario de nuestra aplicacion, para poder  importar a su area de trabajo.
        </p>

        <span className="fw-bold">Selecciona dando click al registro que quiera importar.</span>
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
    {Data.length !==0 &&
    Data.map((venta,index) => (<TableRowApi key={index} item={venta} onclick={rowClick} cancelSelect={cancelSelection}/>)
    )
    }
  </tbody>
    
</table>
</div>
<ConfirmDataApi addData={addRows} />
<Toaster/>

</main>
    );
}


export default TablaDataApi;