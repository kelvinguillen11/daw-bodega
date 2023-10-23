import VideoPrincipal from './VideoPrincipal';
import "../hojas-de-estilo/contacto.css"
import HeaderPrincipal from './HeaderPrincipal';
import FooterPrincipal from './FooterPrincipal';
import Gatito from "../img/Gato-asomandose.jpg";
function Contacto(){
    return(
        <>
        <HeaderPrincipal/>
        <VideoPrincipal/>
        <div className="contenedor-contacto-principal">
        <div className="contact-info">
            <img src={Gatito} alt="Imagen de contacto"/>
            <p><strong>Teléfono:</strong> +503 2235-1140</p>
            <p><strong>Correo Electrónico:</strong> <a href="mailto:info@example.com">info@example.com</a></p>
            <address>
                <strong>Dirección:</strong><br/>
                Calle Plan del Pino, Ciudadela Don Bosco, Soyapango  Km 1 1/2.<br/>
            </address>
        </div>
    </div>
    <FooterPrincipal/>
    </>
    );
}
export default Contacto;