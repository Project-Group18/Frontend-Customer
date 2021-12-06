import styles from './ShoppingCartPage.module.css'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
function ShoppingCartPage(props) {

    const {jwt, cartItems, onAdd, onRemove} = props;
    console.log("cartItems:")
    console.log(cartItems)

   
    const totalPrice = cartItems.reduce((a,c) =>a+c.price * c.qty, 0).toFixed(2);
    

    return (
        <div  className= {styles.ShoppingCartBackground} >
            <h2>The contents of your shopping cart:</h2>
            <div className= {styles.empty}>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
            <div>
            {cartItems != null && 
            <div className= {styles.items}>
                {cartItems.map((item) => (
                    <div key={item.id} >
                        <div>ID:{item.dish_id}</div>
                        <div>Name:{item.dish_name}</div>

                        <div className={styles.amount}>
                        <button  onClick={() =>onRemove(item)}  className="remove"><div><i class="fas fa-minus-circle"></i></div></button>{item.qty}<button onClick={() =>onAdd(item)}  className="add"><div  ><i class="fas fa-plus-circle"></i></div></button> x € {item.price.toFixed(2)}
                        </div>

                        <br/>

                    </div>
                ))}
             </div>}
           </div> 

            <div>
                   {/*  {cartItems != null && ( */}
                        {cartItems.length !== 0 && (
                        <>
                        <hr></hr>
                        <div className= {styles.items}>
                        <div >Total price</div>
                        <div>{totalPrice}€</div>
                        </div>
                        <Link to={{
                            pathname: '/shoppingcartpage/finalizeorder'}} 
                            state={{cartItems, jwt, totalPrice}}>
                            <button className={styles.button}><div className={styles.link}>Submit order</div></button>
                        </Link>
                        </>
                        )}


            </div>
        </div>
    )
}

export default ShoppingCartPage
