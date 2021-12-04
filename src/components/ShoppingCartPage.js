import React, {useState} from 'react'
import { Link } from 'react-router-dom'
function ShoppingCartPage(props) {

    const {cartItems, onAdd, onRemove} = props;
    console.log("cartItems:")
    console.log(cartItems)


    return (
        <div>
            <h2>The contents of your shopping cart:</h2>
            <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
            <div>
            {cartItems.length !== 0 && 
            <div>
                {cartItems.map((item) => (
                    <div key={item.id} >
                        <div>ID:{item.dish_id}</div>
                        <div>Name:{item.dish_name}</div>

                        <div>
                        {item.qty} x € {item.price.toFixed(2)}
                        </div>

                        <div>
                            <button onClick={() =>onRemove(item)}  className="remove">Remove</button>
                            <button onClick={() =>onAdd(item)}  className="add">Add</button>
                        </div>
                        <br/>

                    </div>
                ))}
             </div>}
           </div> 

            <div>
                    {cartItems.length !== 0 && (
                        <>
                        <hr></hr>
                        <div>
                        <div>Total price</div>
                        <div>{cartItems.reduce((a,c) =>a+c.price * c.qty, 0).toFixed(2)}€</div>
                        </div>
                        <Link to={{
                            pathname: '/shoppingcartpage/finalizeorder'}} 
                            state={{cartItems, /* totalPrice */ }}>
                            <button>Submit order</button>
                        </Link>
                        </>
                        )}


            </div>
        </div>
    )
}

export default ShoppingCartPage
