import '../hojas-de-estilo/loginFormulario.css';
import VideoPrincipal from './VideoPrincipal';

function LoginFormulario() {
  return (
    <>
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
          <button type="button">Aceptar</button>
        </form>
      </div>
      </div>
    </>
  );
}

export default LoginFormulario;