import React,{useContext, useState} from "react";
import "./Login.css";
import { UserContext } from "../context/UserContext";


function Login() {
    const {getUser} = useContext(UserContext);
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");

    async function loginUser(e){
        e.preventDefault();
        await getUser({email, password});
        setEmail("");
        setPassword("");
    }

    return (
        <div className="Login">
            <form onSubmit={loginUser} className="Login-Form">
                <ul className="Wrapper">
                    <li>
                        <label>Email</label>
                        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </li>
                    <li>
                        <label>Password</label>
                        <input type="password"placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </li>
                    <li>
                        <button type="submit">Login</button>
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default Login;