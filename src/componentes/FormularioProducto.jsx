import { useForm } from "react-hook-form";
import { newObjectVenta } from "../services/Ventas/ventasUtils";

function FormularioProducto({setNewVenta}){
    const {register,handleSubmit} = useForm();

    const RegisterVenta = (data) =>
    {
        const handlerData = newObjectVenta(data);
        setNewVenta(handlerData);
    }
    return(
        <form className="container-xl row ms-1" onSubmit={handleSubmit(RegisterVenta)}>
        <fieldset className="border border-black  rounded-2 mt-3">
            <legend>Registrar producto</legend>
            <div className="row col-12">
            <div className="col-4">
            <label className="form-label">ID producto</label>
            <input type="text" className="form-control" {...register('id')}/>
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
        </form>
    );
}
export default FormularioProducto; 