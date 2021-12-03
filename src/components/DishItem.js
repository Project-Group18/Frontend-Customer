import React from 'react'
import styles from './DishItem.module.css'

export default function DishItem(props) {


    const {onAdd, product} = props;
/*     console.log("product:")
    console.log(product) */

    return (
        <div>

 {/*        <h3>Food Name:{product.dish_name}</h3>
        <div>{product.price}€</div>
        <div>
            <button onClick={() =>onAdd(product)}>Add to cart</button>
        </div> */}






            <div className={styles.detailContainer}>
                    <p>Food Name: <span>{product.dish_name}</span></p>
                    <p>Price: <span>{product.price}€</span></p>
                    <div>
                        <img className={styles.placeholder} src='restaurantPlaceHolderIcon.jpg' alt='picture'/>
                        <div  className={styles.button}><i className={styles.shoppingcart} class="fas fa-cart-arrow-down"></i></div>
                        <br/>
                        <button onClick={() =>onAdd(product)}>Add to cart</button>
                    </div>
            </div>
        </div>
    )
}