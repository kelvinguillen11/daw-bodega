import {DeleteVenta, createLocalStorage,getVentas, resetLocalStorage} from "../Ventas/ventasUtils";
import { useState} from "react";

export const useTable = () =>{

const [myArraySellers,setMyArraySellers] = useState([]);

const newVenta = (NuevaVenta) =>{
  setMyArraySellers([...myArraySellers,NuevaVenta]);
}
const eliminateRow = (item) =>{
const newVentas = myArraySellers.filter(venta => venta.id !== item.id)
setMyArraySellers(newVentas);
DeleteVenta(item);
}

const getLocalStorage = () =>{
    const data = getVentas();
   if(data !==null)
   {setMyArraySellers(data);
  }
   else{
    createLocalStorage();
   }
}

const resetWS = () =>{
  setMyArraySellers([]);
 resetLocalStorage();
}
    return [myArraySellers,newVenta,eliminateRow,getLocalStorage,resetWS];
}