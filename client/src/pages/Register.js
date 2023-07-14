import React, { useContext, useState } from 'react';
import "./Register.css";
import { UserContext } from '../context/UserContext';


function Register() {
    const {saveUser} = useContext(UserContext);
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function registerUser(e) {
        e.preventDefault();
        await saveUser({ fName, lName, email, password });
        setFName("");
        setLName("");
        setEmail("");
        setPassword("");
    }


    return (
        <div className="Register">
            <form onSubmit={registerUser} className="Registeration-Form">
                <ul className="Wrapper">
                    <li>
                        <label>First Name</label>
                        <input type="text" placeholder="First Name" value={fName} onChange={(e) => setFName(e.target.value)} required/>
                    </li>
                    <li>
                        <label>Last Name</label>
                        <input type="text" placeholder="Last Name" value={lName} onChange={(e) => setLName(e.target.value)} required/>
                    </li>
                    <li>
                        <label>Email</label>
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </li>
                    <li>
                        <label>Password</label>
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    </li>
                    <li>
                        <button type="submit">Register</button>
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default Register;