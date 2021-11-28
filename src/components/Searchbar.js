import React from 'react'
import styles from './Header.module.css'




export default function Searchbar() {

    
    

    return (
        <div>
            <div className={styles.search}> 

              <input className={styles.searchbar} type="searchtext" placeholder= "Search for restaurants or dishes" 
              onChange={ console.log(event.target.value) }/>

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

        </div>
    )
}
