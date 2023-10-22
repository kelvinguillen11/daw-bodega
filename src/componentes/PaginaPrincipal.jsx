
import ContenidoPrincipal from './ContenidoPrincipal';
import FooterPrincipal from './FooterPrincipal';
import VideoPrincipal from './VideoPrincipal';

function PaginaPrincipal(){
    return(
      <>
        <VideoPrincipal/>
        <ContenidoPrincipal/>  
        <FooterPrincipal/>
      </>  
    );
}

export default PaginaPrincipal;