import React from 'react'
import styles from './HeaderSignedIn.module.css'
import { useState } from 'react';
import LoginPopUp from './Login';
import RegisterPopUp from './Register.js';

export default function HeaderSignedIn() {
    
    const [buttonLogin, setButtonLogin] = useState(false);
    const [buttonRegister, setButtonRegister] = useState(false);
    return (
        <div>
              <div class={styles.Headercontainer}>
        <img className={styles.image} src='olivertwistLogo1.jpg' alt='picture'/>

                  <div className={styles.Account}>
                  <button onClick={() => setButtonLogin(true)}>My Account</button>
                  
                  <button onClick={() => setButtonRegister(true)}>Log Out</button>
                  <i className={styles.shoppingcart} class="fas fa-shopping-cart" ></i>
                  </div>
            
        </div>
      
            <LoginPopUp trigger ={buttonLogin} setTrigger ={setButtonLogin}/>
            <RegisterPopUp trigger={buttonRegister} setTrigger ={setButtonRegister}/>
        </div>
    )
}
