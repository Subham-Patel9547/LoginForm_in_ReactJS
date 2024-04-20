import React, { useState } from 'react'
import '../CSS/Login.css';

export default function Login() {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [msg,setMsg]=useState('');

    const Login=()=>{
       
        if (email===password) {
            setMsg('Login Succesful.....')
        }else{
            setMsg('Something Went Wrong....')
        }
        setEmail('')
        setPassword('')
        
    }

  return (
    <>
    
          <div class="mainImg">
        <img src="IMAGE/air102.jpg" alt='as'/>
      </div>

      <div class="overAll">
        <div class="img">
    <img src="IMAGE/user-128-512.png" alt='Images' height="100%" width="100%"/>
</div>
        <form>
        <div className='msg'>{msg}</div>
          <div class="group-input">

            <input type="text" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            required/>

            <label>Email</label>
            {/* <i class="fa-regular fa-envelope"></i> */}
          </div>
          
          <div class="group-input">

            <input type="password" minlength="4" maxlength="8" 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
            required/>

            <label>Password</label>
            {/* <i class="fa-solid fa-lock"></i> */}
          </div>

          <div class="group-input">
            <button class="Submit" onClick={()=>Login()}>Login</button>
          </div>
        </form>
        <div class="group-input">
        <p>Don't have a Account? </p><a href="#"> SignUp</a>
      </div>
      </div>
      
    </>
  )
}
