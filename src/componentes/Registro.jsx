
import '../hojas-de-estilo/Registro.css';
import VideoPrincipal from "./VideoPrincipal";
import {BiUser,BiEnvelope,BiIdCard, BiLockAlt} from "react-icons/bi";
import {useForm} from 'react-hook-form';
import  {findUserByDui, RegisterUser, isPasswordValidate} from'../services/User/userUtils';
function Registro() {

  const {register,formState : {errors}, handleSubmit, getValues} = useForm();

  const setUserRegister = (data) =>
  {
    RegisterUser(data);
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
            required: true 
        })}
        />
        </div>
        </div>
        <div className='mt-2'>
        <label>Apellido</label>
        <div className='input-group mt-1'>
        <span className="input-group-text bg-transparent text-white" id="Apellido"><BiUser/></span>
        <input type="text" className='form-control bg-transparent text-white'  aria-describedby="Apellido" 
        {...register('apellidoUsuario',{
          required: true
        })}
        />
        </div>
        
      </div>
      <div className='mt-2'>
        <label>Correo</label>
        <div className='input-group mt-1'>
        <span className="input-group-text bg-transparent text-white" id="Correo"><BiEnvelope/></span>
        <input type="email" className='form-control bg-transparent text-white' aria-describedby="Correo" 
        {...register('emailUsuario',{
          required: true
        })}
        />
        </div>
      </div>
      <div className='mt-2'>
        <label>DUI</label>
        <div className='input-group mt-1'>
        <span className="input-group-text bg-transparent text-white" id="DUI"><BiIdCard/></span>
        <input type="text" className='form-control bg-transparent text-white'  aria-describedby="DUI"
        {...register('duiUsuario',{
          validate : findUserByDui
        })}
        />
        </div>
        {errors.duiUsuario?.type === "validate" && <p>Este Dui ya esta registrado.</p>}
        </div>
        <div className='mt-2'>
        <label>Contraseña
        </label>
        <div className='input-group mt-1'>
        <span className="input-group-text bg-transparent text-white" id="Password"><BiLockAlt/></span>
        <input type="text"  className='form-control bg-transparent text-white' aria-describedby="Password" 
        {...register('passwordUsuario',{
          required: true
        })}/>
        </div>
      </div>
      <div className='mt-2'>
        <label> repita su contraseña</label>
        <div className='input-group mt-1'>
        <span className="input-group-text bg-transparent text-white" id="Password"><BiLockAlt/></span>
        <input type="text"  className='form-control bg-transparent text-white' aria-describedby="Password" 
        {...register('repeatpassword',{
          validate: (value) => isPasswordValidate(value, getValues("passwordUsuario"))
        })}/>
        </div>
        {errors.repeatpassword?.type === "validate" && <p>Las contraseñas no coinciden.</p>}
      </div>
      <button type='submit' className='btn mt-5'>Registrarse</button>
    </form>
    </div>
    </div>
   </>
  );
}
export default Registro;
