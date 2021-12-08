import React, { useState, useEffect} from 'react'
import styles from './MyAccountPage.module.css';
import CustomerOrder from './CustomerOrder';
import api from '../api/config_customer';
import jwtFromWeb from 'jsonwebtoken';
import apiCustomer from '../api/config_customer';

function MyAccountPage(props) {

    const [customerInfo, setCustomerInfo] = useState([]);
    const [customerOrders, setCustomerOrders] = useState([]);
    const {jwt} = props;
    const decodedToken = jwtFromWeb.decode(jwt);


    //load customer data with customer id
    useEffect(() => {
        const loadCustomerDataWithJwt =  async () => {
        try {const res = await api.get(decodedToken.user.id.toString(),
        {
            headers: {
                'Authorization': 'Bearer ' +props.jwt
            }
        }
        );
        console.log("customer data:")
        console.log(res);
        setCustomerInfo(res.data)
        } catch (err) {//Not in 200 response range
            console.log(err);
        }}
        loadCustomerDataWithJwt();
    }, [])

    //put request here which changes the user information and


    //get request here which gets all orders by customer ID
    //get all orders using customer id
    useEffect(() => {
    const loadOrdersWithJWT =  async () => {
    try {const res = await apiCustomer.post('orderHistory',
    {
        order_status: "Delivered",
        customer_id: decodedToken.user.id,
    },
    {
    headers: {
    'Authorization': 'Bearer ' +jwt
    }
    }
    );
    console.log("order data:")
    console.log(res);
    setCustomerOrders(res.data)
    } catch (err) {//Not in 200 response range
    console.log(err);
    }}
    loadOrdersWithJWT();
  }, [])
 

    return (
        <div>
        
        <div className={styles.heading}><b>My Profile</b></div>
            <div className={styles.myInfo}>
                {customerInfo.map(c => 
                    <div >
                    <div>Name: {c.customer_name}</div>
                    <div>Default Address: {c.home_address}</div> 
                    <div>Credit card number: {c.credit_card}</div>
                    </div>
                )}
            </div>

        <div className={styles.heading}><b>Order History</b></div>
   
            <div className={styles.OrderInfoContainer}>
                <div className={styles.scrolldiv}>
                           
                            <div >
                        {customerOrders.map(order_c => 
                            <div key={order_c.order_id}>
                                <h4>ID: <input name="orderid" value={order_c.order_id}/></h4>
                                <h4 >Price: {order_c.total_price}€</h4>
                                <h4>Msg: {order_c.message}</h4>
                                <h4>Status: {order_c.order_status}</h4>
                                <h4>Delivery address: {order_c.delivery_location}</h4>
                                <hr/>
                            </div>
                            )}
                        </div>

                    
                   
                </div>
            </div> 


    </div>
    )
}

export default MyAccountPage
