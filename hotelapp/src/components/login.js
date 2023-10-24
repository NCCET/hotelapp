import{signInWithEmailAndPassword} from 'firebase/auth';
import {useNavigate, Link} from "react-router-dom";
import { useState } from 'react';
import {auth} from '../config/firebase'

function Login (){
    const navigate = useNavigate();

        const [ email, setEmail ] = useState('');
        const[ password, setPassword ] = useState('');

    const goToHomePage =(()=>{

        signInWithEmailAndPassword(auth, email, password) .then(()=>{
            alert("Log in successfully")
            navigate("/home");

        }).catch(() =>{

        });
        
    });


    return(
        <div>
            <h1>Login Page</h1>


            <input 
            type="text" 
            placeholder="Enter email"
            onChange={(event) => setEmail (event.target.value)} />
            <br></br> <br></br>
            <input 
            type="password" 
            placeholder="Enter password" onChange={(event) => setPassword (event.target.value)}/><br></br>
            <button onClick={goToHomePage}>Login</button> <br></br>{""}
            <br></br>
            <Link to="/forgotPassword">forgotPassword</Link><br></br>
            <Link to="/">Don't have an account : Sign Up</Link>
        </div>
    )
}

export default Login;