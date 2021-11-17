
import React from 'react'
import styles from './CreateRestaurantPopUp.module.css'

function CreateRestaurantPopUp(props) {
    return (props.trigger) ? (
        <div className={styles.popup}>
            
            <div className={styles.popup_inner}>
                <div className= {styles.popup_text_container}>
                    <p>Name of the restaurant</p>
                    <input type="text" placeholder="Restaurant Name"></input>
                    <p>Address of the restaurant</p>
                    <input type="text" placeholder="Address"></input>
                    <p>Restaurant type</p>
                    <input type="text" placeholder="Restaurant Type"></input>
                    <p>Open hours</p>
                    <input type="text" placeholder="Open Hours"></input>
                    <p>price range</p>
                    <select id="priceRange">
                        <option>€</option>
                        <option>€€</option>
                        <option>€€€</option>
                        <option>€€€€</option>
                    </select>
                    
                    <button className={styles.loginButton}>Create now</button>
                </div>
                <button className={styles.closeButton} onClick={() => props.setTrigger(false)}>&times;</button> 
            </div>
               
        </div>
    
    ) : "";
}

export default CreateRestaurantPopUp