import {toast} from  'react-hot-toast';

export const  notifySuccessImport = () => toast.success("Datos importados exitosamente.")
export const  notifyErrorImport = () => toast.error("Debe tener un minimo de 3 datos para poder importarlo.");


export const notifySuccessLoad = () => toast.success('Datos cargados desde el almacenamiento Local.');
export const notifyErrorLoad= () => toast.error('Ha ocurrido un error,intentalo mas tarde');