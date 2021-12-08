import styles from './FinalizeOrder.module.css'
import React, {useState, useEffect} from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import jwtFromWeb from 'jsonwebtoken';
import api from '../api/config_customer';

function FinalizeOrder(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const {jwt, totalPrice, cartItems} = location.state;
    const {clearCart} = props;
    const [customer, setCustomer] = useState([]);
    const decodedToken = jwtFromWeb.decode(jwt);
    const [ orderProcessState, setOrderProcessState] = useState("idle")

    //jwt brings the user credentials
    //get request to get customer info with decodedToken
    useEffect(() => {
    const loadCustomerWithJWT =  async () => {
    try {const res = await api.get(decodedToken.user.id.toString(),
    {
    headers: {
    'Authorization': 'Bearer ' +jwt
    }
    }
    );
    console.log(res);
    setCustomer(res.data)
    } catch (err) {//Not in 200 response range
    console.log(err);
    }}
    loadCustomerWithJWT();
    }, [])

    //post request for a new orders
    const handleOrder = (event) => {
    event.preventDefault();
    
    setOrderProcessState("processing");
      

    if (event.target.creditcard.value.length == 10) {
    const createOrder =  async () => {
        try {const res = await api.post('createOrder', 
        {
            total_price: totalPrice,
            message: event.target.message.value,
            customer_id: decodedToken.user.id,
            restaurant_id: cartItems[0].restaurant_id,
            delivery_location: event.target.address.value
        },
        {
            headers: {
            'Authorization': 'Bearer ' +jwt
            }
        } 
        );
        //what should happen after an order is sent?
        
        setOrderProcessState("orderSuccessful");
        console.log(res);
        clearCart();
         setTimeout(() => {
            navigate('/', {replace: true})
        }, 1500);
                
        } catch (error) {
           console.log(error)
            setOrderProcessState("orderFailed");
        }
        
        } 
        createOrder();
    } else {
        setOrderProcessState("creditcardIssue");
    }
    }


    let orderUIControls = null;
    switch(orderProcessState) {
        case "idle":
            orderUIControls =<button className={styles.button} type="submit"><div className={styles.link}>Submit order</div></button>
            break;
        case "processing": 
             orderUIControls = <span style={{color:"blue"}}>Processing...</span>
            break;
        case "orderSuccessful":
            orderUIControls = <span style={{color:"green"}}>Order sent successfully</span>
            break;

        case "orderFailed":
            orderUIControls = <span style={{color:"red"}}>Something went wrong</span>
            break;
        case "creditcardIssue":
            orderUIControls = <span style={{color:"red"}}>There is an issue with your credit card</span>
    }



    return (
        <div className={styles.ShoppingCartBackground}>
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

            <div className={styles.total} >Total amount: {totalPrice}</div>
            <br/>
            <br/>
       <div>
            <form onSubmit={ handleOrder}>

            <p>*Enter delivery address here:</p>
            {customer.length !== 0 && 
            <input type="text" name="address" defaultValue={customer[0].home_address} ></input>
            }
            <p>*Enter credit card number here:</p>
            {customer.length !== 0 && 
            <input type="text" name="creditcard" defaultValue={customer[0].credit_card}></input>
            }
            <p>Edit message here:</p>
            <textarea type="text" name="message" placeholder="Thanks for the food!" ></textarea>

            <br/>
            <br/>
            <br/>
            <div>
            {orderUIControls}
            </div>
            </form>
               
      </div>
      

        </div>
    )
}

export default FinalizeOrder
