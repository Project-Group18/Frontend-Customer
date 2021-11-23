import React from 'react'
import styles from './Restaurantaccountpage.module.css'

export default function Restaurantaccountpage() {
    return (
        <div className="App">
        <header className={styles.background}>
  
        <div >

            <div className={styles.Headercontainer}>
                <div>
                    <p>Restaurant Manager Name:</p>
                    <p>Restaurant Manager Email:</p><br></br>
                    <p>Manage current order</p>
                    <p>Browse past order</p>
                    <br></br>
                    <p>
                    <form onSubmit>
                        <label>
                            Add new menu catergory:
                            <select className={styles.inputtextbar}>
                                <option>Pizza</option>
                                <option>Lime</option>
                                <option>Coconut</option>
                                <option>Mango</option>
                            </select>
                        </label>
                        <input className={styles.add} type="submit" value="Add" />
                    </form>
                    </p>
                    </div>
                <div>Edit Profile</div>
            </div>
            <div className={styles.ManageRestText}>Manage Restaurant</div>
            <div className={styles.manageRestaurantContainer}>
                    <div className={styles.manageRestaurant}>
                            <div>
                                <div>Restaurants Name</div>
                                <input className={styles.inputtextbar} type="searchtext" placeholder= "Enter restaurant's name"></input>
                                <div>
                                    <p>
                                        <label>
                                            Restaurant Type:
                                            <select className={styles.inputtextbar}>
                                                <option>Fast Food</option>
                                                <option>Fine Dining</option>
                                                <option>Casual Dining</option>
                                                <option>Casual Dining</option>
                                                <option>Chinese</option>
                                            </select>
                                        </label>
                                    </p>
                                </div>
                                <div>
                                    <div>Opening Hours</div>
                                    <input className={styles.inputtextbar} type="inputtext" placeholder= "input opening hours"></input>
                                </div>
                                <div>
                                    <div>Manager's name and phone number</div>
                                        <input className={styles.inputtextbar} type="inputtext" placeholder= "Name and number" required></input>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p>
                                        <label>
                                                Price Level:
                                                <select className={styles.inputtextbar}>
                                                    <option>€</option>
                                                    <option>€€</option>
                                                    <option>€€€</option>
                                                    <option>€€€€</option>
                                                    <option>€€€€€</option>
                                                </select>
                                        </label>
                                    </p>
                                </div>
                                <div>
                                    <div>Address</div>
                                    <input className={styles.inputtextbar} type="text" id="address" placeholder="Type in restaurant address"></input>
                                </div>
                            
                            </div>
                        <div>
                            Image of Restaurant or logo.
                        </div>
                                
                    </div>
                    <br></br>
                    <input className={styles.add} type="submit" value="Save" />
                    
            </div>
                
  
          </div>
        </header>
      </div>
    )
}
