
import '../hojas-de-estilo/Registro.css';
import FooterPrincipal from "./FooterPrincipal";
import HeaderPrincipal from './HeaderPrincipal';
import VideoPrincipal from "./VideoPrincipal";
import {BiUser,BiEnvelope,BiIdCard, BiLockAlt} from "react-icons/bi";
function Registro() {
  return (
    <>
    <VideoPrincipal/>
    <div className='contenedor-registro-principal'>
    <div className='registro-wrapper'>
    <h1>Registro</h1>
    <form action="" >
      <div className=' text-white'>
        <label htmlFor="inputNombre">Nombre:</label>
        <div className='input-group mt-1 '>
        <span class="input-group-text bg-transparent text-white" id="Nombre"><BiUser/></span>
        <input type="text" id="inputNombre" name="inputNombre" className='form-control bg-transparent text-white'  aria-describedby="Nombre" />
        </div>
        </div>
        <div className='mt-2'>
        <label htmlFor="inputApellido">Apellido</label>
        <div className='input-group mt-1'>
        <span class="input-group-text bg-transparent text-white" id="Apellido"><BiUser/></span>
        <input type="text" id="inputApellido" name="inputApellido" className='form-control bg-transparent text-white'  aria-describedby="Apellido" />
        </div>
      </div>
      <div className='mt-2'>
        <label htmlFor="inputCorreo">Correo</label>
        <div className='input-group mt-1'>
        <span class="input-group-text bg-transparent text-white" id="Correo"><BiEnvelope/></span>
        <input type="email" id="inputCorreo" name="inputCorreo" className='form-control bg-transparent text-white' aria-describedby="Correo" />
        </div>
      </div>
      <div className='mt-2'>
        <label htmlFor="inputDui">DUI:</label>
        <div className='input-group mt-1'>
        <span class="input-group-text bg-transparent text-white" id="DUI"><BiIdCard/></span>
        <input type="text" id="inputDui" name="inputDui" className='form-control bg-transparent text-white'  aria-describedby="DUI" />
        </div>
        </div>
        <div className='mt-2'>
        <label htmlFor="inputPassword">Password:</label>
        <div className='input-group mt-1'>
        <span class="input-group-text bg-transparent text-white" id="Password"><BiLockAlt/></span>
        <input type="text" id="inputPassword" name="inputPasword" className='form-control bg-transparent text-white' aria-describedby="Password" />
        </div>
      </div>
      <button type='submit' className='btn mt-5'>Registrarse</button>
    </form>
    </div>
    </div>
   </>
  );
}
export default Registro;
