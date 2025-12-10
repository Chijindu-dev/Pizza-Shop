import React, { useState } from 'react'
import "./loginpopup.css"
import { BiX } from 'react-icons/bi'




const loginpopup = ({setShowLogin}) => {

    const [currState , setCurrState] = useState("Sign Up")

  return (
    <div className='loginpopup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <BiX onClick={()=>setShowLogin(false)} className='cancel'/>
            </div>
            <div className="login-popup-inputs">
                {currState === "Login" ? <></> :<input type="text" placeholder='Your Name'  required />}              
                <input type='email' placeholder='Your Email' required/>
                <input type="password" placeholder='Your password' required />
            </div>
            <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            {currState === "Login"
            ? <p>create a new account? <span onClick={()=>setCurrState("Sign Up")}> Click here</span></p> 
            : <p>Already have an account?<span  onClick={()=>setCurrState("Login")}> Login here</span></p>}
            
            
        </form>
    </div>
  )
}

export default loginpopup