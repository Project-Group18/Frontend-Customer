import React from 'react'
import styles from './DishItem.module.css'

export default function DishItem(props) {
    return (
        <div>
            <div className={styles.detailContainer}>
                    <div>
                        <p>Food Name: <span>{props.dish_name}</span></p>
                        <p>Food gategory ID :<span>{props.category_id}</span></p>
                        <p>Price: <span>{props.price}€</span></p>
                        <p>Details: <span>{props.dish_info}</span></p>
                        <p>Restaurant ID: <span>{props.restaurant_id}</span></p>
                    
                    </div>
                      <div>
                      <img className={styles.placeholder} src='restaurantPlaceHolderIcon.jpg' alt='picture'/>
                      <button className={styles.button}><i className={styles.shoppingcart} class="fas fa-cart-arrow-down"></i></button>
                      </div>


                    </div>
        </div>
    )
}