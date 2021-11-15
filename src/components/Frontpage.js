import React from 'react'
import styles from './Frontpage.module.css';
import ObsPopup from './ObsPopup';
import { useState } from 'react';
import LoginPopUp from './Login';
import RegisterPopUp from './Register.js';

function Frontpage() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonLogin, setButtonLogin] = useState(false);
  const [buttonRegister, setButtonRegister] = useState(false);
  return (
    <div className="App">
      <header className={styles.background}>

      <div >
<<<<<<< HEAD
=======
        <div class={styles.Headercontainer}>
        <img className={styles.image} src='olivertwistLogo1.jpg' alt='picture'/>

                  <div className={styles.Account}>
                  <button onClick={() => setButtonLogin(true)}>Log in</button>
                  
                  <button onClick={() => setButtonRegister(true)}>Sign up</button>
                  <i className={styles.shoppingcart} class="fas fa-shopping-cart" ></i>
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
>>>>>>> e96ba08f48340f1bf64ceac473f17ee566f9e0e2
            <div className={styles.onSale}>
            <img className={styles.ufo} src='ufo2.png' alt='picture'/>
            </div>
            


            <p className={styles.categories}> Food categories:</p>
            <div className={styles.optionmenu}>
            <img className={styles.Placeholder} src='restaurantPlaceHolderIcon.jpg' alt='picture'/>
            <img className={styles.Placeholder} src='restaurantPlaceHolderIcon.jpg' alt='picture'/>
            <img className={styles.Placeholder} src='restaurantPlaceHolderIcon.jpg' alt='picture'/>
            <img className={styles.Placeholder} src='restaurantPlaceHolderIcon.jpg' alt='picture'/>
            <img className={styles.Placeholder} src='restaurantPlaceHolderIcon.jpg' alt='picture'/>
            <img className={styles.Placeholder} src='restaurantPlaceHolderIcon.jpg' alt='picture'/>
            </div>
         

        </div>
      </header>
<<<<<<< HEAD
=======
     
      <footer>
        
        <div className={styles.footer}>
          <p>Terms of service</p>
          <p>Contact us</p>
          <p>About us</p>
          <p className={styles.restaurantLogin} onClick={() => setButtonPopup(true)}>For restaurants</p>

          <div className={styles.socialmedia}>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-twitter-square"></i>
          <i class="fab fa-instagram-square"></i>
          </div>
        </div>

      </footer>
      <ObsPopup trigger={buttonPopup} setTrigger ={setButtonPopup}/>
      <LoginPopUp trigger ={buttonLogin} setTrigger ={setButtonLogin}/>
      <RegisterPopUp trigger={buttonRegister} setTrigger ={setButtonRegister}/>
>>>>>>> e96ba08f48340f1bf64ceac473f17ee566f9e0e2
    </div>
  );
}

export default Frontpage;
