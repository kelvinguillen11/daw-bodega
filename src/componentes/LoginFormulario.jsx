import '../hojas-de-estilo/loginFormulario.css';
import Registro from './Registro';

function LoginFormulario() {
  return (
    <>
      <div className="contenedor-Formulario">
        <Registro />
        <label>Inicio de Sesión</label>
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
    </>
  );
}

export default LoginFormulario;