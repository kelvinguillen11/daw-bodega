import { useForm } from "react-hook-form";
import { BotonUpdate } from "./UpdateVenta";
import  { Toaster } from "react-hot-toast";
function FormularioUD({setFunctionRow,closeModalForm,ItemsU}) {
const {register,handleSubmit,reset, formState : {errors}} = useForm({
    defaultValues: {
        title: ItemsU.title,
        price: ItemsU.price,
        count: ItemsU.count,
        category: ItemsU.category,
        description: ItemsU.description
    }
});
const handlerVenta = (data) =>
    {
        setFunctionRow(data);
        reset();
    }
    return(
            <form className="container-xl row ms-1" onSubmit={handleSubmit(handlerVenta)}>
        <fieldset className="border border-black  rounded-2 mt-3">
            <legend>Modificar producto</legend>
            <div className="row col-12">
            <div className="col-5">
            <label  className="form-label">Nombre producto</label>
            <input type="text"  className="form-control" {...register('title',{
                required: true,
                pattern:/^[a-zA-Z0-9]+(?:\s+[a-zA-Z0-9]+)*$/
            })}/>
            {errors.title?.type === "pattern" && <p>No es un titulo valido.</p>}
            </div>
            <div className="col-5">
            <label  className="form-label">Precio unitario</label>
            <input type="text"  className="form-control" {...register('price',{
                required: true,
                pattern: /^[1-9]\d*(\.\d{2})$/
            })}/>
            {errors.price?.type === "pattern" && <p>No es un precio valido.</p>}
            </div>
            </div>
            <div className="row col-12 mt-3">
            <div className="col-5">
            <label  className="form-label" >Cantidad vendida</label>
            <input type="text" className="form-control"{...register('count',{
                required: true,
                pattern: /^[1-9]\d*$/
            })}/>
            {errors.count?.type === "pattern" && <p>No es una cantidad valida.</p>}
            </div>
            <div className="col-5">
            <label  className="form-label">Categoria del producto</label>
            <input type="text"  className="form-control" {...register('category',{
                required: true,
                pattern:/^[a-zA-Z' ]+$/
            })}/>
            {errors.category?.type === "pattern" && <p>No es una categoria valida.</p>}
            </div> 
            </div>
            <div className="row col-12 mt-3 ">
            <div className="col-12">
            <label className="form-label">Descripcion del producto</label>
            <textarea className="w-100" rows="2" {...register('description',{
                required: true,
                pattern: /^[a-zA-Z0-9.,'"\s]+$/
            })}/>
              {errors.description?.type === "pattern" && <p>No es una descripcion valida.</p>}
            </div>
            </div>
            <div className="row col-12  mt-5 mb-3 justify-content-end">          
            <BotonUpdate closeAllmodal={closeModalForm}/>
            </div>
        </fieldset>
        <Toaster/>
        </form>
    );
}

export default FormularioUD;

