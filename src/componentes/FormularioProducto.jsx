import { useForm } from "react-hook-form";
import { newObjectVenta, findVentaById } from "../services/Ventas/ventasUtils";
import { isSessionExist} from "../services/UserSession/SessionUtils";
import {toast,Toaster} from 'react-hot-toast';
function FormularioProducto({setNewVenta}){
    const {register,handleSubmit, formState:{errors}} = useForm();
    
    const RegisterVenta = (data) =>
    {
        const responseSession = isSessionExist();
        if(responseSession){
            const handlerData = newObjectVenta(data);
            setNewVenta(handlerData);
            notifySuccessVenta();
        }
        else
        {
            notifyErrorVenta();
        }
    }

    const notifySuccessVenta = () => toast.success('Registro creado exitosamente');
    const notifyErrorVenta = () => toast.error('Ha ocurrido un error,intentalo mas tarde');

    return(
        <form className="container-xl row ms-1" onSubmit={handleSubmit(RegisterVenta)}>
        <fieldset className="border border-black  rounded-2 mt-3">
            <legend>Registrar producto</legend>
            <div className="row col-12">
            <div className="col-4">
            <label className="form-label">ID producto</label>
            <input type="text" className="form-control" {...register('id',{
                required: true,
                validate:  findVentaById
            })}/>
            {errors.id?.type === 'validate' && <p>Este Id, ya existe!.</p>}
            </div>
            <div className="col-4">
            <label  className="form-label">Nombre producto</label>
            <input type="text"  className="form-control" {...register('title')}/>
            </div>
            <div className="col-4">
            <label  className="form-label">Precio unitario</label>
            <input type="text"  className="form-control" {...register('price')}/>
            </div>
            </div>
            <div className="row col-12 mt-3">
            <div className="col-4">
            <label  className="form-label" >Cantidad vendida</label>
            <input type="text" className="form-control"{...register('count')}/>
            </div>
            <div className="col-4">
            <label  className="form-label">Categoria del producto</label>
            <input type="text"  className="form-control" {...register('category')}/>
            </div>
            </div>
            <div className="row col-12 mt-3 ">
            <div className="col-12">
            <label className="form-label">Descripcion del producto</label>
            <textarea className="w-100" rows="2" {...register('description')}/>
            </div>
            </div>
            <div className="row col-12  mt-5 mb-3 justify-content-end">          
           <button type="submit" className="btn btn-success col-4">Agregar Producto</button>
            </div>
        </fieldset>
        <Toaster/>
        </form>
    );
}
export default FormularioProducto; 