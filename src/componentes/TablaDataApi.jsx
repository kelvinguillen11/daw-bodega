import { useTable } from "../services/hooks/useTable";
import { useEffect, useState} from "react";
import {toast,Toaster} from 'react-hot-toast';
import TableRowApi from "./TableRowApi";
import { UseDataAPi } from "../services/hooks/useDataApi";
function TablaDataApi () {
 const [Data, fetchData] = UseDataAPi([]);
 const [notify,setNotify] = useState(false);
   
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
       (Data !=0)? notifySuccessVenta(): notifyErrorVenta();
     }
    },[notify]);
   
   const notifySuccessVenta = () => toast.success('Datos cargados desde la web');
   const notifyErrorVenta = () => toast.error('Ha ocurrido un error,intentalo mas tarde');
   const rowClick = () => {
    
   } 
   return(
    <main className="Contenedor-trabajo-Principal">
      <div className="container-xl mt-5 mb-5">
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
    {Data.length !=0 &&
    Data.map((venta,index) => (<TableRowApi key={index} item={venta} onclick={clickRow}/>)
    )
    }
  </tbody>
    
</table>
</div>
<Toaster/>
</main>
    );
}


export default TablaDataApi;