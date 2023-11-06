import videoFondo from '../img/Estrellas-fondo.mp4';
import '../hojas-de-estilo/videoPrincipal.css';


function VideoPrincipal()
{
    return(
   <>
   <video src={videoFondo} autoPlay muted loop >
   Este explorador no soporta HTML5.
    </video>
   </>
    );
}

export default VideoPrincipal;