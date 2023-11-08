import { Link } from 'react-router-dom';
import '../hojas-de-estilo/contenidoPrincipal.css';
import ItemContenidoPrincipal from './ItemContenidoPrincipal';
function ContenidoPrincipal(props)
{
    return(
        <main className="contenedor-principal">
        <ItemContenidoPrincipal 
        num = '1'
        titulo = 'Perdidos en el espacio...'
        contenido = 'Nuestro sistema ha sufrido una perdida de datos, dejandonos perdidos en el espacio tiempo, ayudanos a volver a nuestro sistema como estaba antes.'
        />
         <ItemContenidoPrincipal 
        num = '2'
        titulo = 'Ingresa a la nave'
        contenido = {`Registrate como colaborador en nuestro sistema, o si ya eres uno, reportate de nuevo iniciando sesion`}
        />
            <ItemContenidoPrincipal 
        num = 'nave' 
        />  
        </main>
    );
}
export default ContenidoPrincipal;