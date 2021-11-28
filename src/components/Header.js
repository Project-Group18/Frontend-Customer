import React from 'react'
import styles from './Header.module.css'
import { useState } from 'react';
import LoginPopUp from './Login';
import RegisterPopUp from './Register.js';
import ShoppingCartPopUp from './ShoppingCart';

export default function Header() {

    const [buttonShoppingCart, setButtonShoppingCart] = useState(false);
    const [buttonLogin, setButtonLogin] = useState(false);
    const [buttonRegister, setButtonRegister] = useState(false);
    return (
        <div>
              <div class={styles.Headercontainer}>
        {/* <img className={styles.image} src='olivertwistLogo1.jpg' alt='picture'/> */}
        <a href='/' ><img className={styles.image} src='olivertwistLogo1.jpg'/></a>

                  <div className={styles.Account}>
                  <button onClick={() => setButtonLogin(true)}>Log in</button>
                  
                  <button onClick={() => setButtonRegister(true)}>Sign up</button>
                  <i className={styles.shoppingcart} onClick={() =>setButtonShoppingCart(true)} class="fas fa-shopping-cart" ></i>
                  </div>
            
        </div>
      
            <LoginPopUp trigger ={buttonLogin} setTrigger ={setButtonLogin}/>
            <RegisterPopUp trigger={buttonRegister} setTrigger ={setButtonRegister}/>
            <ShoppingCartPopUp trigger={buttonShoppingCart} setTrigger ={setButtonShoppingCart}/>
        </div>
    )
}
