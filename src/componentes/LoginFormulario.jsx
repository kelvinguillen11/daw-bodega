import '../hojas-de-estilo/loginFormulario.css';
import HeaderPrincipal from './HeaderPrincipal';
import VideoPrincipal from './VideoPrincipal';
import { Link} from 'react-router-dom';
import {BiUser,BiLockAlt} from "react-icons/bi";
import FooterPrincipal from './FooterPrincipal';
import { useForm } from 'react-hook-form';


function LoginFormulario() {
  const {register,handleSubmit} = useForm();
  const Submit = ()=>{
   
  }
  return (
    <>
    <HeaderPrincipal/>
    <VideoPrincipal/>
    <div className='Contenedor-Login-Principal'>
    <div className='Login-wrapper'>
    <form onSubmit={handleSubmit(Submit)}> 
    <h1>Login</h1>
    <div className='input-box'>
    <input type='text' placeholder='Usuario' {...register('userLogin',{
      required: true
    })} required /> 
    <i><BiUser/></i>
    </div>
    <div className='input-box'>
    <input type='password' placeholder='password' {...register('userPassword',{
      required: true
    })} />
    <i><BiLockAlt/></i> 
    </div>
    <div className='recuerda-olvidado'>
    <label><input type='checkbox'/> Recuerdame</label>
    <a href='#'>olvidaste tu password?</a>
    </div>
    <button type='submit' className='btn'>Login</button>
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
