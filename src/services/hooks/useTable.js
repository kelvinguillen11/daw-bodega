import {DeleteVenta, initLocalStorage} from "../Ventas/ventasUtils";
import { useState} from "react";

export const useTable = () =>{

const [myArraySellers,setMyArraySellers] = useState([]);

const newVenta = (NuevaVenta) =>{
  setMyArraySellers([...myArraySellers,NuevaVenta]);
}

  const fetchData = async () => {
    try {
      const data = await initLocalStorage();
      setMyArraySellers(data);
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };



const eliminateRow = (item) =>{
const newVentas = myArraySellers.filter(venta => venta.id !== item.id)
setMyArraySellers(newVentas);
DeleteVenta(item);
}
    return [myArraySellers,newVenta,eliminateRow,fetchData];
}