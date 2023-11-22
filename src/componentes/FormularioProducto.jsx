import { useForm } from "react-hook-form";
import { newObjectVenta, findVentaById } from "../services/Ventas/ventasUtils";
import { isSessionExist} from "../services/UserSession/SessionUtils";
import {toast,Toaster} from 'react-hot-toast';
function FormularioProducto({setNewVenta}){
    const {register,handleSubmit, formState:{errors},reset} = useForm();
    
    const RegisterVenta = (data) =>
    {
        const responseSession = isSessionExist();
        if(responseSession){
            const handlerData = newObjectVenta(data);
            setNewVenta(handlerData);
            notifySuccessVenta();
            reset();
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
                validate:  findVentaById,
                pattern: /^[1-9]\d*$/

            })}/>
            {errors.id?.type === 'validate' && <p>Este Id ya existe!.</p>}
            {errors.id?.type === 'pattern' && <p>No es un Id valido.</p>}
            </div>
            <div className="col-4">
            <label  className="form-label">Nombre producto</label>
            <input type="text"  className="form-control" {...register('title',{
                required: true,
                pattern:/^[a-zA-Z0-9.,'"\s\-]+$/
            })}/>
            {errors.title?.type === "pattern" && <p>No es un titulo valido.</p>}
            </div>
            <div className="col-4">
            <label  className="form-label">Precio unitario</label>
            <input type="text"  className="form-control" {...register('price',{
                required: true,
                pattern: /^[1-9]\d*(\.\d{2})$/
            })}/>
            {errors.price?.type === "pattern" && <p>No es un precio valido.</p>}
            </div>
            </div>
            <div className="row col-12 mt-3">
            <div className="col-4">
            <label  className="form-label" >Cantidad vendida</label>
            <input type="text" className="form-control"{...register('count',{
                 required: true,
                 pattern: /^[1-9]\d*$/
            })}/>
            {errors.count?.type === "pattern" && <p>No es una cantidad valida.</p>}
            </div>
            <div className="col-4">
            <label  className="form-label">Categoria del producto</label>
            <input type="text"  className="form-control" {...register('category',{
                required: true,
                pattern: /^[a-zA-Z' ]+$/
            })}/>
            {errors.category?.type === "pattern" && <p>No es una categoria valida.</p>}
            </div>
            </div>
            <div className="row col-12 mt-3 ">
            <div className="col-12">
            <label className="form-label">Descripcion del producto</label>
            <textarea className="w-100" rows="2" {...register('description',{
                required: true,
                pattern: /^[^<>]*$/
            })}/>
            {errors.description?.type === "pattern" && <p>No es una descripcion valida.</p>}
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