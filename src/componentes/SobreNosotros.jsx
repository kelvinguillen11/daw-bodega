import '../hojas-de-estilo/sobreNosotros.css';
import CardIntegrante from './CardIntengrante';
import FooterPrincipal from "./FooterPrincipal";
import VideoPrincipal from "./VideoPrincipal";

function SobreNosotros(){
    return(
    <>
    <VideoPrincipal/>
    <div className="container-xxl d-flex justify-content-center">
        <div className='contenedor-descripcion'>
        <h2 className="display-3 text-center">DAW</h2>
         <p className="fs-3">
        Somos un grupo de 5 integrantes que cursan la materia DAW, el proposito de nuestro proyecto
        es aprender el lenguaje JavaScript, y sus diversas tecnologias que nos ayudan a crear webs
        con mejores resultados, 
        </p>
        </div>
    </div>
    <div className='container-xxl d-flex justify-content-center align-items-center gap-3  mb-5 flex-column contenedor-Integrantes'>
    <h3 className="display-3 text-white">Integrantes:</h3>
    <CardIntegrante
    img="Kelvin"
    Nombre="Kelvin Rene Guillen Alfaro"
    />
    <CardIntegrante
    img="Kelvin"
    Nombre="Kelvin Rene Guillen Alfaro"
    />
    <CardIntegrante
    img="Gorety"
    Nombre="Dania Gorety Tejada Campos"
    />
    </div>
    <FooterPrincipal/>
    </>
    );
}

export default SobreNosotros;