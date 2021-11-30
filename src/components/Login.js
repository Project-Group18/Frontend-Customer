import React from 'react'
import { useState } from 'react';
import styles from './Login.module.css'
import LoginFailedPopup from './LoginFailedPopup.js'

function LoginPopUp(props) {

const [email, setEmail] = useState("");




const [LoginFailedPopUp, setLoginFailed] = useState(false);

    return (props.trigger) ? (
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