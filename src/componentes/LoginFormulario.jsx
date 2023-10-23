import '../hojas-de-estilo/loginFormulario.css';
import HeaderPrincipal from './HeaderPrincipal';
import VideoPrincipal from './VideoPrincipal';
import { Link} from 'react-router-dom';
import {BiUser,BiLockAlt} from "react-icons/bi";
import FooterPrincipal from './FooterPrincipal';
function LoginFormulario() {
  return (
    <>
    <HeaderPrincipal/>
    <VideoPrincipal/>
    <div className='Contenedor-Login-Principal'>
    <div className='Login-wrapper'>
    <form action=''> 
    <h1>Login</h1>
    <div className='input-box'>
    <input type='text' placeholder='Usuario' required /> 
    <i><BiUser/></i>
    </div>
    <div className='input-box'>
    <input type='password' placeholder='password' required />
    <i><BiLockAlt/></i> 
    </div>
    <div className='recuerda-olvidado'>
    <label><input type='checkbox'/> Recuerdame</label>
    <a href='#'>olvidaste tu password?</a>
    </div>
    <Link to="/Area-Trabajo"><button type='submit' className='btn'>Login</button></Link>

    <div className='link-registro'>
    <p>No tienes una cuenta? <Link to="/registro">Registrate</Link></p>
    </div>
    </form>
    </div>
    </div>
    <FooterPrincipal/>
    </>
  );
}

export default LoginFormulario;
