import logo from './logo.svg';
import './App.css';
import EncabezadoPrincipal from './componentes/EncabezadoPrincipal';
import ContenidoPrincipal from './componentes/ContenidoPrincipal';
import FooterPrincipal from './componentes/FooterPrincipal';
import VideoPrincipal from './componentes/VideoPrincipal';
import ItemContenidoPrincipal from './componentes/ItemContenidoPrincipal';
function App() {
  return (
    <>
      <VideoPrincipal/>
      <EncabezadoPrincipal/>
      <ContenidoPrincipal>  
        <ItemContenidoPrincipal
        num = '1'
        titulo = 'Perdidos en el espacio...'
        contenido = 'Nuestro sistema ha sufrido una perdida de datos, dejandonos perdidos en el espacio tiempo, ayudanos a volver a nuestro sistema como estaba antes.'
        />
      </ContenidoPrincipal> 
      <FooterPrincipal/>
    </>
  );
}

export default App;
