import React from 'react'
import { useState } from 'react';
import styles from './Login.module.css'
import LoginFailedPopup from './LoginFailedPopup.js'

function LoginPopUp(props) {

const [LoginFailedPopUp, setLoginFailed] = useState(false);

const handleSignupSubmit = async (event) => {
    event.preventDefault();
    console.log(event)
}

    return (props.trigger) ? (
        
  /*      I was working on login here when I decided to do the register first 
  
        <div className={styles.popup}>
            <div className={styles.popup_inner}>
            <div className= {styles.popup_text_container}> 
      <h1>Login</h1>
            <form onSubmit={}>
                <div>
                    Username <input type="text" name="username"/>
                </div>
                <div>
                    Password <input type="password" name="password"/>
                </div>
                <div>
                    <button>Sign in</button> 
                </div>
                <div>
                    <button className={styles.closeButton} onClick={() => props.setTrigger(false)}>&times;</button> 
                </div>
            </form>
            </div>
      </div>
    </div> */
        
        
        
        <div className={styles.popup}>
            
            <div className={styles.popup_inner}>
                <div className= {styles.popup_text_container}>
                <p>Username:</p>
                <input type="text" placeholder="username"></input>
                <p>Password:</p>
                <input type="text" placeholder="password"></input>
                
                <p className={styles.forgotPassword}>Forgot your password?</p>
                <button className={styles.loginButton}>Log in</button>
                <button onClick={() => setLoginFailed(true)}>Log in failed</button>
                </div>
                <button className={styles.closeButton} onClick={() => props.setTrigger(false)}>&times;</button> 
            
            </div>
               <LoginFailedPopup trigger ={LoginFailedPopUp} setTrigger ={setLoginFailed}/>
        </div>
    
    ) : "";
}

export default LoginPopUp