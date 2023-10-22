import '../hojas-de-estilo/loginFormulario.css';
import HeaderPrincipal from './HeaderPrincipal';
import VideoPrincipal from './VideoPrincipal';
import { Link} from 'react-router-dom';
function LoginFormulario() {
  return (
    <>
    <HeaderPrincipal/>
    <VideoPrincipal/>
      <div className="contenedor-Formulario">
       <div className='Formulario bg-dark text-white'> 
        <label className='text-center text-white'>Inicio de Sesión</label>
        <form>
          <div>
            <label htmlFor="cuenta">Ingrese su cuenta:</label>
            <input type="text" id="cuenta" name="cuenta" />
          </div>
          <div>
            <label htmlFor="contrasenia">Ingrese su contraseña:</label>
            <input type="password" id="contrasenia" name="contrasenia" />
          </div>
          <Link to="/Area-Trabajo"><button type="button">Aceptar</button></Link>
        </form>
      </div>
      </div>
    </>
  );
}

export default LoginFormulario;
