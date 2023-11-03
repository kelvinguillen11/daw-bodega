import { useState } from "react";
import { modificateVenta } from "../Ventas/ventasUtils";

export const UseRows = (item) => {

    const [items,setItem] = useState({...item})
    const Modificate = (newValues) =>
    { 
        const newVentas = {...items,...newValues,};
        setItem(newVentas);
        modificateVenta(newVentas);
    }
        return [items,Modificate];
}


