export const obtainValueByApi = async () => {
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
  