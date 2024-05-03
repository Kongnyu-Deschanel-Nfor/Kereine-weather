import React, { useState } from 'react'
import {auth,  googleProvider} from "../config/firebase"
import {signInWithPopup, signInWithEmailAndPassword} from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import "./../pages/signup.css"
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const signin = async () => {
    try {
      signInWithEmailAndPassword(auth, email, password)
      navigate("/");
    } catch (error) {
      console.log(error);
      console.log(error);
    }
  };
  const googleLogin = async () => {
    try {
      signInWithPopup(auth, googleProvider)
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
    style={{
      padding:"50px",
      display:'flex',
      justifyContent:"center"
    }}
    className='contain'>
    <div className='innerc'> 
    
      <div className='title'>
      <p
      style={{
        fontFamily:"monserif",
        fontSize:"29px",
        textAlign:"center",

      }}
      >Login Form</p>

      </div>
      <div
      style={{
        display:"flex",
        justifyContent:"center",
        margin:"5px"
      }}
      >
    <img 
style={{
  height:"15vh",
  width:"12vh"
}}
src="cloudy.png" alt="" />   
    </div>
      <form action="" onSubmit={signin} >
      <div 
      
      className='form'>
        
      <input type="email" required placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
          <input type="password" required placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
         <div
         style={{
          display:"flex",
          justifyContent:"center"
         }}
         >
         <button className='login' type='submit'>Login</button>

         </div>
         <p
      style={{
        textAlign:"center",

      }}
     >Sign up width social media</p>
     <div
         style={{
          display:"flex",
          justifyContent:"center",
          gap:"22px"
         }}
         >
     <div>
      <img src="git.png" alt="" className="social" />
     </div>
     <div>
      <img src="face.png" alt="" className="social" />
     </div>
     <div>
      <img src
      onClick={googleLogin} src="google.png" alt="" className="social" />
     </div>
      </div>
      </div>
       </form>
    </div>

  </div>
  )
}

export default Login