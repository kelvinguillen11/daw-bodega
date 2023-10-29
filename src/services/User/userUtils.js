
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

export const RegisterUser = (data) =>
{
    let arrayUser= getUser();
    arrayUser.push(data);
    window.localStorage.setItem("users", JSON.stringify(arrayUser));
    console.log(arrayUser);
}

export const findUserByDui = (value) =>
{
    let arrayUser= getUser();
    if(arrayUser !== null)
    {
       const  Find = arrayUser.find(user => user.duiUsuario === value)
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
    let arrayUser= getUser();
    if(arrayUser !== null)
    {
       const  Find = arrayUser.filter(user => user.duiUsuario === data.userLogin)
       if(Find)
       {
        console.log(Find);
       if( Find.passwordUsuario === data.userPassword){
        console.log("true");
       } 
       else
       {
        console.log("valores evaluados" + Find[0].passwordUsuario + " " + data.userPassword)
       }
       }
       else{
        console.log("No existe ese usuario.")
        return false;
       }
    }
    else
    {
      
    }
}