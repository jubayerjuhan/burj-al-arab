import React, { useContext } from 'react';
import { LoggedInUserContext } from "./../../App";
import { useHistory, useLocation } from "react-router-dom";
import { signInWithGoogle } from './LoginManager.js';



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(LoggedInUserContext);
    console.log(loggedInUser);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then((res) => {
            setLoggedInUser(res);
            history.push(from);
        })
    }

    return (
        <div>
            <h1>This is Login</h1>
            <button onClick={handleGoogleSignIn}><i class="fab fa-google"></i> Login With Google</button>
        </div>
    );
};

export default Login;