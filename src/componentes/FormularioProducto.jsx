function FormularioProducto(){
    return(
        <form className="container row">
        <fieldset className="border border-black  rounded-2 mt-3">
            <legend>Registrar producto</legend>
            <div className="row col-12">
            <div className="col-4">
            <label htmlFor="inputID" className="form-label">ID producto</label>
            <input type="text" id="inputID" className="form-control"/>
            </div>
            <div className="col-4">
            <label htmlFor="inputNombre" className="form-label">Nombre producto</label>
            <input type="text" id="inputNombre" className="form-control"/>
            </div>
            <div className="col-4">
            <label htmlFor="inputPrecioUnitario" className="form-label">Nombre producto</label>
            <input type="text" id="inputPrecioUnitario" className="form-control"/>
            </div>
            </div>
            <div className="row col-12 mt-3">
            <div className="col-4">
            <label htmlFor="inputCantidadVendida" className="form-label" >Cantidad vendida</label>
            <input type="text" id="inputCantidadVendida" className="form-control"/>
            </div>
            <div className="col-4">
            <label htmlFor="inputCategoria" className="form-label">Categoria del producto</label>
            <input type="text" id="inputCategoria" className="form-control"/>
            </div>
            </div>
            <div className="row col-12 mt-3 ">
            <div className="col-12">
            <label htmlFor="inputDescripcion" className="form-label">Descripcion del producto</label>
            <textarea id="inputDescripcion" className="w-100" rows="2"/>
            </div>
            </div>
            <div className="row col-12  mt-5 mb-3 justify-content-end">          
           <button type="button" className="btn btn-success col-4">Agregar Producto</button>
            </div>
        </fieldset>
        </form>
    );
}
export default FormularioProducto; 