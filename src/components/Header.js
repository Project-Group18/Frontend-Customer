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
        <img className={styles.image} src='olivertwistLogo1.jpg' alt='picture'/>

                  <div className={styles.Account}>
                  <button onClick={() => setButtonLogin(true)}>Log in</button>
                  
                  <button onClick={() => setButtonRegister(true)}>Sign up</button>
                  <i className={styles.shoppingcart} onClick={() =>setButtonShoppingCart(true)} class="fas fa-shopping-cart" ></i>
                  </div>
            
        </div>
      

            <div className={styles.search}> 
              <input className={styles.searchbar} type="searchtext" placeholder= "Search for restaurants or dishes"></input> 
              <button> Search</button>
            </div> 

            <div className={styles.location}> 
              <i class="fas fa-map-marker-alt"></i>
                <select id="location">
                  <option value="oulu">Oulu</option>
                  <option value="rovaniemi">Rovaniemi</option>
                  <option value="turku">Turku</option>
                </select>
              
            </div>
            <LoginPopUp trigger ={buttonLogin} setTrigger ={setButtonLogin}/>
            <RegisterPopUp trigger={buttonRegister} setTrigger ={setButtonRegister}/>
            <ShoppingCartPopUp trigger={buttonShoppingCart} setTrigger ={setButtonShoppingCart}/>
        </div>
    )
}