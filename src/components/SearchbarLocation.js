import React from 'react'
import styles from './Header.module.css'
import { useState } from 'react';
import LoginPopUp from './Login';
import RegisterPopUp from './Register.js';
import {Outlet} from 'react-router-dom';
export default function SearchbarLocation() {
    
    
    return (
        <div>
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
            <Outlet/>
        </div>
    )
}
