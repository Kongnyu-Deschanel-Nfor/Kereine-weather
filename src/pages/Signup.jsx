import React, { useState } from 'react'
import {auth,  googleProvider} from "../config/firebase"
import {signInWithPopup, createUserWithEmailAndPassword} from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import "./signup.css"


const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signup = async () => {
        try {
          createUserWithEmailAndPassword(auth, email, password)
          navigate("/login");
        } catch (error) {
          console.log(error);
        }
      };

      const googleSignup = async () => {
        try {
          signInWithPopup(auth, googleProvider)
          navigate("/");
        } catch (error) {
          console.log(error);
        }
      };


  return (
    <div className='contain'>
      <div className='innerc'> 
        <div className='title'>
        <p>Login Form</p>
        </div>
        <form action="" onSubmit={signup} >
        <div>
        <input type="email" required placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" required placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
            <button type='submit'>Login</button>
        <button onClick={googleSignup}>Sign Up with Google</button>
        </div>
         </form>
      </div>
 
    </div>
  )
}

export default Signup