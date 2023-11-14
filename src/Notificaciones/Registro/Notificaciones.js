import {toast} from 'react-hot-toast';

export const notifySuccessRegister = () => toast.success('Usuario creado exitosamente');
export const notifyErrorRegister = () => toast.error('Ha ocurrido un error,intentalo mas tarde');