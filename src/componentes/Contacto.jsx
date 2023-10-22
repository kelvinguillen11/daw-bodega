import VideoPrincipal from './VideoPrincipal';
function Contacto(){
    return(
        <>
        <VideoPrincipal/>
        <div className="container">
        <div className="contact-info">
            <img src="img/contac.png.jpg" alt="Imagen de contacto"/>
            <p><strong>Teléfono:</strong> +503 2235-1140</p>
            <p><strong>Correo Electrónico:</strong> <a href="mailto:info@example.com">info@example.com</a></p>
            <address>
                <strong>Dirección:</strong><br/>
                Calle Plan del Pino, Ciudadela Don Bosco, Soyapango  Km 1 1/2.<br/>
            </address>
        </div>
    </div>
        </>
    );
}
export default Contacto;