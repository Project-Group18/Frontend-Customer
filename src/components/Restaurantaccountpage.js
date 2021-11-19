import React from 'react'
import styles from './Restaurantaccountpage.module.css'
import AddMenuItemPopUp from './addMenuItem.js'
import { useState } from 'react'

export default function Restaurantaccountpage() {
    const [menuItemPopup, setMenuItemPopup] = useState(false);
    return (
        <div className="App">
        <header className={styles.background}>
  
        <div >

            <div className={styles.Headercontainer}>
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
                        <input type="submit" value="Add" />
                    </form>
                    </p>
                    <input className={styles.catergoryAdd} type="text" placeholder="Add new catergory (max. 12)" />
                    <button> Add catergory</button>
                    
                    <br/>
                    <button onClick={() => setMenuItemPopup(true)}>Add new dish</button>
                    </div>
                <div>Edit Profile</div>
            </div>
            <div>Manage Restaurant</div>
            <div>
                    <div>
                        <div>Restaurants Name</div>
                        <input className={styles.inputtextbar} type="searchtext" placeholder= "Enter restaurant's name"></input>
                        <div>
                            <p>
                                <label>
                                    Restaurant Type:
                                    <select>
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
                                        <select>
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
                            <input type="text" id="address" placeholder="Type in restaurant address"></input>
                        </div>
                    
                    </div>
                <div>
                    Image of Restaurant or logo.
                </div>
                        
            </div>
           
  
          </div>
        </header>

      </div>
    )
}
