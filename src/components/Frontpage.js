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

      <div>
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
      
    </div>
  );
}

export default Frontpage;
