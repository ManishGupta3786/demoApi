
import { useContext } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function Header() {
    const { user, clearUser } = useContext(UserContext);

    function removeUser (){
        clearUser();
    }

    return (
        <div className="Header">
            <div className="NavBar">
                <div className="Brand">
                    <h2>MyChatApp</h2>
                </div>
                <div className="UserInfo">
                    {user ? <h3>Logged In as : {user.fName + " " + user.lName}</h3> : ""}
                </div>
                <div className="Actions">
                    {user ? (<><button onClick={removeUser}>Logout</button></>) : (<>
                        <Link to="/login"><button>Login</button></Link>
                        <Link to="/register"><button>Register</button></Link>
                    </>)}
                </div>
            </div>
        </div>
    )
}

export default Header;