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

                    <div>
                    <p> <Image style={{width: '200px', marginLeft:'20px'}} cloudName="dczwvybll"
                    publicId={product.dish_picture}/></p>
                    </div>
                    <div>
                    <div className={styles.productInfo}>ID: <span>{product.dish_id}</span></div>
                    <div className={styles.productInfo}>Food Name: <span >{product.dish_name}</span></div>
                    <br/>
                    <br/>
                    <div className={styles.productInfo}>Price: <span>{product.price}€</span></div>
                    </div>

                    <div>
                        
                        <br/>
                        <button className={styles.button} onClick={() =>onAdd(product)}><div className={styles.link}>Add to cart <i className={styles.shoppingcart} className="fas fa-cart-arrow-down"></i></div></button>
                    </div>
            </div>
        </div>
    )
}