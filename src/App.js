import React from 'react'
import styles from './App.module.css';

function App() {
  return (
    <div className="App">
      <header className={styles.background}>

      <div>
        <img className={styles.image} src='olivertwistLogo1.jpg' alt='picture'/>


            <div> 
              <input type="text" placeholder= "Search for restaurants or dishes"></input> 
              <button> Search</button>
            </div> 

            <div>
              <i class="fas fa-map-marker-alt"></i>
                <select id="location">
                  <option value="oulu">Oulu</option>
                  <option value="oulu">Oulu</option>
                  <option value="oulu">Oulu</option>
                </select>
                
            </div>

            <div class="Account">
              <button>Log in</button>
              <button>Sign up</button>
              <i class="fas fa-shopping-cart"></i>
            </div>

        </div>
      </header>
    </div>
  );
}

export default App;
