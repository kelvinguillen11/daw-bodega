import '../hojas-de-estilo/footerPrincipal.css';
import LogoBodega from '../img/Logo-bodega.png';
function FooterPrincipal(){
    return(
        <footer className="footer">
        <div className="item-logo flex-item">
        <div className="logo-footer">
        <img src={LogoBodega} alt="imagen-logo" srcset=""/>
        </div>
        <h3>Sistema Bodega UDB.</h3>
        </div>
        <div className="descripcion-footer">
            <p>
                Esta app esta creada para la gestion del inventario de la bodeguita Udb.
                utilizando los lenguajes Html, Javascript, css3, tambien la tecnologia de React.js
            </p>
        </div>
        <div className="item-git flex-item">
           <div className="git">
            <img src="" alt="logo de git" srcset=""/>
           </div>
           <span>codigo fuente</span>
        </div>
    </footer>
    );
}
export default FooterPrincipal;