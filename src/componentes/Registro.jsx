
import '../hojas-de-estilo/Registro.css';
import VideoPrincipal from "./VideoPrincipal";
import {BiUser,BiEnvelope,BiIdCard, BiLockAlt} from "react-icons/bi";
import {useForm} from 'react-hook-form';
import  {findUserByDui, RegisterUser, isPasswordValidate} from'../services/User/userUtils';
import {Toaster} from 'react-hot-toast';
import { notifySuccessRegister,notifyErrorRegister } from '../Notificaciones/Registro/Notificaciones';
function Registro() {

  const {register,formState : {errors}, handleSubmit, getValues} = useForm();
  
  const setUserRegister = (data) =>
  {
   try{ 
    RegisterUser(data);
    notifySuccessRegister();
    
  }catch(error)
  {
    notifyErrorRegister();
  }
  }
 
  return (
    <>
    <VideoPrincipal/>
    <div className='contenedor-registro-principal'>
    <div className='registro-wrapper'>
    <h1>Registro</h1>
    <form action="" onSubmit={handleSubmit(setUserRegister)}>
      <div className=' text-white'>
        <label>Nombre</label>
        <div className='input-group mt-1 '>
        <span className="input-group-text bg-transparent text-white" id="Nombre"><BiUser/></span>
        <input type="text" className='form-control bg-transparent text-white'  aria-describedby="Nombre" 
        {...register('NombreUsuario',{
            required: true,
            pattern: /^[A-Za-záéíóúüñÁÉÍÓÚÜÑ\s']+$/

        })}
        />
        </div>
        {errors.NombreUsuario?.type === "pattern" && <p>No es un nombre valido.</p>}
        </div>
        <div className='mt-2'>
        <label>Apellido</label>
        <div className='input-group mt-1'>
        <span className="input-group-text bg-transparent text-white" id="Apellido"><BiUser/></span>
        <input type="text" className='form-control bg-transparent text-white'  aria-describedby="Apellido" 
        {...register('apellidoUsuario',{
          required: true,
          pattern: /^[A-Za-záéíóúüñÁÉÍÓÚÜÑ\s']+$/
        })}
        />
        </div>
        {errors.apellidoUsuario?.type === "pattern" && <p>No es un apellido valido.</p>}
      </div>
      <div className='mt-2'>
        <label>Correo</label>
        <div className='input-group mt-1'>
        <span className="input-group-text bg-transparent text-white" id="Correo"><BiEnvelope/></span>
        <input type="email" className='form-control bg-transparent text-white' aria-describedby="Correo" 
        {...register('emailUsuario',{
          required: true,
          pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        })}
        />
        </div>
        {errors.emailUsuario?.type === "pattern" && <p>No es un correo valido.</p>}
      </div>
      <div className='mt-2'>
        <label>DUI</label>
        <div className='input-group mt-1'>
        <span className="input-group-text bg-transparent text-white" id="DUI"><BiIdCard/></span>
        <input type="text" className='form-control bg-transparent text-white'  aria-describedby="DUI"
        {...register('duiUsuario',{
          validate : findUserByDui,
          pattern: /^(\d{8}-\d{1})$/
        })}
        />
        </div>
        {errors.duiUsuario?.type === "validate" && <p>Este Dui ya esta registrado.</p>}
        {errors.duiUsuario?.type === "pattern" && <p>No es un Dui valido.</p>}
        </div>
        <div className='mt-2'>
        <label>Contraseña
        </label>
        <div className='input-group mt-1'>
        <span className="input-group-text bg-transparent text-white" id="Password"><BiLockAlt/></span>
        <input type="text"  className='form-control bg-transparent text-white' aria-describedby="Password" 
        {...register('passwordUsuario',{
          required: true,
          //escribe aqui pattern: /tu regExp/
        })}/>
        </div>
      </div>
      <div className='mt-2'>
        <label> repita su contraseña</label>
        <div className='input-group mt-1'>
        <span className="input-group-text bg-transparent text-white" id="Password"><BiLockAlt/></span>
        <input type="text"  className='form-control bg-transparent text-white' aria-describedby="Password" 
        {...register('repeatpassword',{
          validate: (value) => isPasswordValidate(value, getValues("passwordUsuario")),
          //escribe aqui pattern: /tu regExp/
        })}/>
        </div>
        {errors.repeatpassword?.type === "validate" && <p>Las contraseñas no coinciden.</p>}
      </div>
      <button type='submit' className='btn mt-5'>Registrarse</button>
    </form>
    </div>
    </div>
    <Toaster/>
   </>
  );
}
export default Registro;
