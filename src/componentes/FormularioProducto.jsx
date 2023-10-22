function FormularioProducto(){
    return(
        <form className="container row">
        <fieldset className="border border-black mt-5">
            <legend>Registrar producto</legend>
            <div className="row col-12">
            <div className="col-4">
            <label htmlFor="inputID">ID producto</label>
            <input type="text" id="inputID"/>
            </div>
            <div className="col-4">
            <label htmlFor="inputNombre">Nombre producto</label>
            <input type="text" id="inputNombre"/>
            </div>
            <div className="col-4">
            <label htmlFor="inputPrecioUnitario">Nombre producto</label>
            <input type="text" id="inputPrecioUnitario"/>
            </div>
            </div>
            <div className="row col-12">
            <div className="col-4">
            <label htmlFor="inputCantidadVendida">Cantidad vendida</label>
            <input type="text" id="inputCantidadVendida"/>
            </div>
            <div className="col-4">
            <label htmlFor="inputCategoria">Categoria del producto</label>
            <input type="text" id="inputCategoria"/>
            </div>
            </div>
            <div className="row col-12">
            <div className="col-12">
            <label htmlFor="inputDescripcion">Descripcion del producto</label>
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