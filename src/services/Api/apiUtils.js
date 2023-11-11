import { getVentas, mapsIds } from "../Ventas/ventasUtils";

export const addRowsToWs = (rowSelected) => {
    const Ventas = getVentas();
    if(Ventas.length !==0){
        const newVentas =[...Ventas,...rowSelected];
    console.log(newVentas);
    window.localStorage.setItem("Ventas", JSON.stringify(newVentas));
    mapsIds();
    }
    else{
        window.localStorage.setItem("Ventas", JSON.stringify(rowSelected));
        mapsIds();
    }
   }