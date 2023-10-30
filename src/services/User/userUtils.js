class Usuario {
    constructor(nombre,apellido,correo,dui,contrasena){
        this.Nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.dui = dui;
        this.contrasena = contrasena;
    }
}
const getUser = () =>
{
 const Users = window.localStorage.getItem("users");
 
 if(Users !==null)
    {
        return JSON.parse(Users);
    }
    else
    {
        return [];
    }
}
const createObjectUsuario = (data) =>
{
    const Users = new Usuario;
    Users.Nombre= data.NombreUsuario;
    Users.apellido= data.apellidoUsuario;
    Users.correo= data.emailUsuario;
    Users.dui= data.duiUsuario;
    Users.contrasena= data.passwordUsuario;

    return Users
}
export const RegisterUser = (data) =>
{
    const arrayUser= getUser();
    const User = createObjectUsuario(data);
    arrayUser.push(User);
    window.localStorage.setItem("users", JSON.stringify(arrayUser));
    console.log(arrayUser);
}

export const findUserByDui = (value) =>
{
    let arrayUser= getUser();
    if(arrayUser !== null)
    {
       const  Find = arrayUser.find(user => user.dui === value)
       if(Find)
       {
        return false;
       }
       else{
        return true;
       }
    }
    else
    {
        return true;
    }

}

export const loginUser = (data) =>{
    const arrayUser= getUser();
    if(arrayUser !== null)
    {
       const  Find = arrayUser.find(user => user.dui === data.userLogin)
       if(Find)
       {
       if( Find.contrasena === data.userPassword){
            return true;
       } 
       else
       {
        return false;
       }
       }
       else{
        return false;
       }
    }
    else
    {
      return false;
    }
}

export const isPasswordValidate = (pass,repeatPass) =>
{
    return pass === repeatPass;
}