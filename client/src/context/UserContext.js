import React,{createContext, useEffect, useState} from "react";
import axios from 'axios';
export const UserContext = createContext();

export const UserContextProvider = ({children})=>{
    const [user, setUser] = useState(null);

    useEffect(()=>{
        let userData = JSON.parse(localStorage.getItem("user"));
        setUser(userData);
    },[])

    const saveUser = async (data) =>{
        const response = await axios.post('http://184.72.152.2/demoApi/register',data);
        localStorage.setItem("user",JSON.stringify(response.data.data));
        setUser(response.data.data);
    }

    const getUser = async (data) =>{
        const response = await axios.post('http://184.72.152.2/demoApi/login',data);
        localStorage.setItem("user",JSON.stringify(response.data));
        setUser(response.data);
    }

    const clearUser = () =>{
        localStorage.removeItem('user');
        setUser(null);
    }

    return(
        <UserContext.Provider value={{
            user,
            saveUser,
            clearUser,
            getUser,

        }}>{children}</UserContext.Provider>
    )
}