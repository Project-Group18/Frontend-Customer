import React from 'react'
import styles from './Header.module.css'

export default function Header() {
    return (
        <div>
             <header className={styles.background}>

                 <div >
                    <div class={styles.Headercontainer}>
                        <img className={styles.image} src='olivertwistLogo1.jpg' alt='picture'/>

                                <div className={styles.Account}>
                                <button>Log in</button>
                                <button>Sign up</button>
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
                    

                </div>
            </header>
        </div>
    )
}
