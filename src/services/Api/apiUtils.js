import { getVentas, mapsIds } from "../Ventas/ventasUtils";

class Venta
{
   constructor(id,title,price,count,description,category)
   {
     this.id= id;
     this.title= title;
     this.price = price;
     this.count = count;
     this.description = description;
     this.category = category;
   }
}

const ObjectsVenta = (data) =>{
    const newData = data.map(element => {
        const venta = new Venta();
        console.log(element);
        venta.id = element.id;
        venta.title = element.title;
        venta.price = element.price;
        venta.count = element.rating.count;
        venta.description = element.description;
        venta.category = element.category;
        console.log(venta)
        return venta;
    })

    return newData;
}
export const addRowsToWs = (rowSelected) => {
    const Ventas = getVentas();
    if(Ventas.length !==0){
        const newObjectsRows = ObjectsVenta(rowSelected);
        const newVentas =[...Ventas,...newObjectsRows];
    console.log(newVentas);
    window.localStorage.setItem("Ventas", JSON.stringify(newVentas));
    mapsIds();
    }
    else{
        const newObjectsRows = ObjectsVenta(rowSelected);
        window.localStorage.setItem("Ventas", JSON.stringify(newObjectsRows));
        mapsIds();
    }
   }