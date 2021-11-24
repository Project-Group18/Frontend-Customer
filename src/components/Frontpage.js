import React from 'react'
import styles from './Frontpage.module.css';
import ObsPopup from './ObsPopup';
import { useState } from 'react';
import FoodCategoriesPage from './FoodCategoriesPage';
import GetRequests from './GetRequests';

function Frontpage(props) {
  return (
    <div className="App">
      <header className={styles.background}>

      <div>
        
            
        </div>
            <div className={styles.onSale}>
            <img className={styles.ufo} src='ufo2.png' alt='picture'/>
            </div>
            


            <p className={styles.categories}> Food categories:</p>
            <div>
            <li className={styles.optionmenu}>
              
              <a href='foodcategoriespage' ><img src='buffet-pic.jpg'/></a>
              <a href='foodcategoriespage'><img src='fast-food-pic.jpg'/></a>
              <a href='foodcategoriespage'><img src='fast-casual-pic.jpg'/></a>
              <a href='foodcategoriespage'><img src='casual-dining-pic.jpg'/></a>
              <a href='foodcategoriespage'><img src='fine-dining-pic.jpg'/></a>
              <a href='foodcategoriespage'><img src='plus-sign-pic.jpg'/></a>
              <br/>            
            </li>
            </div>
         

      
      </header>
      </div>
  );
  }


export default Frontpage;
