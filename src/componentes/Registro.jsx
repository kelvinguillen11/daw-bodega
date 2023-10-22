
import '../hojas-de-estilo/Registro.css';
import FooterPrincipal from "./FooterPrincipal";
import VideoPrincipal from "./VideoPrincipal";

function Registro() {
  return (
    <>
    <VideoPrincipal/>
    <form action="registro" id="regiscss">
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" />
      </div>
      <div>
        <label htmlFor="apellido">Apellido:</label>
        <input type="text" id="apellido" name="apellido" />
      </div>
      <div>
        <label htmlFor="correo">Correo:</label>
        <input type="email" id="correo" name="correo" />
      </div>
      <div>
        <label htmlFor="dui">DUI:</label>
        <input type="text" id="dui" name="dui" />
      </div>
      <div>
        <label htmlFor="contrasena">Contraseña:</label>
        <input type="password" id="contrasena" name="contrasena" />
      </div>
      <button type="submit">Registrar</button>
    </form>
    
   </>
  );
}
export default Registro;
