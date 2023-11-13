import { useState } from "react";
import { modificateVenta } from "../Ventas/ventasUtils";
import toast from "react-hot-toast";
export const UseRows = (item) => {

    const [items,setItem] = useState({...item})
    const Modificate = (newValues) =>
    { 
        try{
            const newVentas = {...items,...newValues,};
        setItem(newVentas);
        modificateVenta(newVentas);     
        success();
    } catch
    {
        
    }
    
}

const success = () => toast.success("Modificado exitosamente.");

return [items,Modificate];
}


