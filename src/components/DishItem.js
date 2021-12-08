import React from 'react'
import styles from './DishItem.module.css'
import {Image} from 'cloudinary-react'

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






            <div className={styles.detailContainer} key={product.dish_id}>
                    <p>Food Name: <span>{product.dish_name}</span></p>
                    <p>Price: <span>{product.price}€</span></p>
                    <p> <Image style={{width: '300px'}} cloudName="dczwvybll"
                    publicId={product.dish_picture}/></p>
                    <div>
                        <img className={styles.placeholder} src='restaurantPlaceHolderIcon.jpg' alt='picture'/>
                        
                        <br/>
                        <button className={styles.button} onClick={() =>onAdd(product)}><div className={styles.link}>Add to cart <i className={styles.shoppingcart} className="fas fa-cart-arrow-down"></i></div></button>
                    </div>
            </div>
        </div>
    )
}