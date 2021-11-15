import React from 'react'
import styles from './Restaurantaccountpage.module.css'

export default function Restaurantaccountpage() {
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
            <div>
                <div>
                    <p>Restaurant Manager Name:</p>
                    <p>Restaurant Manager Email:</p>
                    <p>Manage current order</p>
                    <p>Browse past order</p>
                    <p>
                    <form onSubmit>
                        <label>
                            Add new menu catergory:
                            <select>
                                <option>Pizza</option>
                                <option>Lime</option>
                                <option>Coconut</option>
                                <option>Mango</option>
                            </select>
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    </p>
                    </div>
                <div>Edit Profile</div>
            </div>
            <div>Manage Restaurant</div>
            <div></div>
           
  
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
    )
}
