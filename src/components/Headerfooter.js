import React from 'react'
import styles from './Headerfooter.module.css';


function Headerfooter() {
  return (
    <div className="App">
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
      <footer>
        
        <div className={styles.footer}>
          <p>Terms of service</p>
          <p>Contact us</p>
          <p>About us</p>
          <p>For restaurants</p>

          <div className={styles.socialmedia}>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-twitter-square"></i>
          <i class="fab fa-instagram-square"></i>
          </div>
        </div>

      </footer>
    </div>
  );
}

export default Headerfooter;
