
import ContenidoPrincipal from './ContenidoPrincipal';
import FooterPrincipal from './FooterPrincipal';
import HeaderPrincipal from './HeaderPrincipal';
import VideoPrincipal from './VideoPrincipal';

function PaginaPrincipal(){
    return(
      <>
        <HeaderPrincipal/>
        <VideoPrincipal/>
        <ContenidoPrincipal/>  
        <FooterPrincipal/>
      </>  
    );
}

export default PaginaPrincipal;