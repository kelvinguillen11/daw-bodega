import logo from './logo.svg';
import './App.css';
import EncabezadoPrincipal from './componentes/EncabezadoPrincipal';
import ContenidoPrincipal from './componentes/ContenidoPrincipal';
import FooterPrincipal from './componentes/FooterPrincipal';
import VideoPrincipal from './componentes/VideoPrincipal';
function App() {
  return (
    <>
      <VideoPrincipal/>
      <EncabezadoPrincipal/>
      <ContenidoPrincipal/>  
      <FooterPrincipal/>
    </>
  );
}

export default App;
