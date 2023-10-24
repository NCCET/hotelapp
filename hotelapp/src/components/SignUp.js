import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase';
import { useState} from "react";
import {useNavigate, Link} from "react-router-dom";


function SignUp () {

    const navigate = useNavigate

    const [email,setEmail] =useState('');
    const [password,setPassword] =useState ('');

    const register=(()=>{
        createUserWithEmailAndPassword(auth,email, password).then(()=>{
            alert('Registered successfully')
            navigate("/Login");

        }).catch((error)=>{

            console.log(error.message);
        })
    })
    return(
        <div>
            <h1>Sign UP page</h1>
            <input 
            type='text' 
            placeholder='Enter email' 
            onChange={(event)=> setEmail(event.target.value)}  
            />{""} 
            <br></br><br></br>
            <input 
            type='password' 
            placeholder='Enter password'
            onChange={(event)=> setPassword(event.target.value)}
            />{""} 
            <br></br><br></br>

            <button onClick={register}>Sign up</button>
            <br></br><br></br>
            <Link to="/Login">Don't have an account : Sign Up</Link>
        </div>
    )
};

export default SignUp;