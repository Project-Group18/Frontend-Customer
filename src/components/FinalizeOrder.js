import React from 'react'
import {useLocation} from 'react-router-dom';

function FinalizeOrder() {

    const location = useLocation();

    const {cartItems, totalPrice} = location.state; 

    //reguest or propping here about the user credentials

    //post request for a new orders

    //get request to get customer info

    return (
        <div>
            <h2>Here you can finalize your order</h2>

            <h3>These are the items in your cart: </h3>

            {cartItems.map(element => 
                <div key={element.dish_id}>
                    <div>{element.dish_name}</div>
                    <div>{element.qty}x</div>
                    <div>{element.price}€</div>
                    <hr/>
                </div>
                )}

            <div>Total amount: {totalPrice}</div>
            <br/>
       <div>
        <div>Enter address here:</div>
      <input type="text" name="address" placeholder="Enter address..."></input>
      <div>Enter credit card number here:</div>
      <input type="text" name="creditcard" placeholder="Enter credit card number..."></input>
      <div>Enter message for restaurant:</div>
      <input type="text" name="message" placeholder="Write a message..."></input>
      </div>
        <button>Finalize order</button>
        <br/>

        </div>
    )
}

export default FinalizeOrder
