 const obtainValueByApi = async () => {
    const Url = "https://fakestoreapi.com/products";
    try {
      const response = await fetch(Url);
      if (!response.ok) {
        throw new Error('La solicitud no se completó correctamente');
      }
      const data = await response.json(); 
      return data;
    } catch (error) {
      console.error('Error en la solicitud:', error);
      throw error; 
    }
  }

 export const initLocalStorage = async () =>{
    const Ventas = window.localStorage.getItem('Ventas');
    if(Ventas !==null)
    {
      return JSON.parse(Ventas);
    }
    else
    {
      const Ventas = await obtainValueByApi();
      window.localStorage.setItem('Ventas', JSON.stringify(Ventas));
      return Ventas;
    }
 }

 class Venta
 {
    constructor(id,title,price,count,description,category)
    {
      this.id= id;
      this.title= title;
      this.price = price;
      this.rating = count;
      this.description = description;
      this.category = category;
    }
 }

export const newObjectVenta = (data) =>
{
  const newVenta = new Venta();
  newVenta.id = data.id;
  newVenta.title = data.title;
  newVenta.price = data.price;
  newVenta.rating = {count : data.count};
  newVenta.description= data.description;
  newVenta.category= data.category;
  setVentas(newVenta);
  return newVenta;
}

const getVentas = () =>
{
   const Ventas = window.localStorage.getItem('Ventas');
   return JSON.parse(Ventas);
}

const setVentas = (data) =>
{
  const Ventas = getVentas();
  const newVentas = [...Ventas,data];
  window.localStorage.setItem('Ventas', JSON.stringify(newVentas));
}

export const modificateVenta =(venta) =>{
 const ventas = getVentas();
 if(venta)
 {
  const newVentas =  ventas.filter(ventas => ventas.id !== venta.id)
  newVentas.push(venta);
  window.localStorage.setItem('Ventas', JSON.stringify(newVentas));
 }  
} 

export const DeleteVenta =(venta) =>{
  const ventas = getVentas();
  if(venta)
  {
   const newVentas =  ventas.filter(ventas => ventas.id !== venta.id)
   window.localStorage.setItem('Ventas', JSON.stringify(newVentas));
   return newVentas;
  }  
 } 