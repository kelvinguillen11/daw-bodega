import { findUserNameByDui } from "../User/userUtils";

export const SetSessionUser = (user) => {
    if(user)
    {
        window.localStorage.setItem("UserLogged", JSON.stringify(user));
        console.log(user);
    }
}

export const getSessionUser =  ()=>{
    const User =  window.localStorage.getItem("UserLogged");
    const UserInfo =  JSON.parse(User);
    if(UserInfo)
    {
        return UserInfo.userLogin;
    }
}

export const getNameUser = () =>{
    const User = getSessionUser();
    const InfoToReturn = findUserNameByDui(User);
    if(InfoToReturn)
    {
        return InfoToReturn;
    }
    else
    {
        return null;
    }
}
export const logoutSession = () =>{
    window.localStorage.removeItem("UserLogged");
}