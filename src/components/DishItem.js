import React from 'react'
import styles from './DishItem.module.css'

export default function DishItem(props) {
    return (
        <div>
            <div className={styles.detailContainer}>
                    <div>
                        <p>Food Name:<span>{props.dName}</span></p>
                        <p>Food gategory:<span>{props.dCategory}</span></p>
                        <p>Price:<span>{props.dPrice}</span></p>
                        <p>Restaurant:<span>{props.dRestaurant}</span></p>
                    
                    </div>
                      <div>
                      <img className={styles.placeholder} src='restaurantPlaceHolderIcon.jpg' alt='picture'/>
                      <button className={styles.button}><i className={styles.shoppingcart} class="fas fa-cart-arrow-down"></i></button>
                      </div>


                    </div>
        </div>
    )
}