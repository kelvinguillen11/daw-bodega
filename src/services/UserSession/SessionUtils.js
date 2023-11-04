export const SetSessionUser = (user) => {
    if(user)
    {
        window.localStorage.setItem("UserLogged", JSON.stringify(user));
        console.log(user);
    }
}

export const getSessionUser =  ()=>{
    const User =  window.localStorage.getItem("UserLogged");
    return  JSON.parse(User);
}