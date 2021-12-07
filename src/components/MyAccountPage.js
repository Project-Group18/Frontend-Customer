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
        
        <div class={styles.heading}><b>My Profile</b></div>
            <div class={styles.myaccountinfo}>
                {customerInfo.map(c => 
                <tr>
                    <div>Name:</div><input className={styles.searchbar} type="name" placeholder={c.customer_name}  ></input> 
                    <div>Default Address:</div><input className={styles.searchbar} type="address" placeholder= {c.home_address} ></input> 
                    <div>Credit card number:</div><input className={styles.searchbar} type="creditcard" placeholder= {c.credit_card} ></input>
                </tr>)}
            
            
            </div>
            <button className={styles.heading}>Save Changes</button>
        <div className={styles.heading}><b>Order History</b></div>
   
            <div className={styles.OrderInfoContainer}>
                <div className={styles.scrolldiv}>
                           
                            <div >
                        {customerOrders.map(order => 
                            <div key={order.order_id}>
                                {/* <div>{order.order_id}</div> */}
                                <h4>ID: <input name="orderid" value={order.order_id}/></h4>
                                <h4 >Price: {order.total_price}€</h4>
                                <h4>Msg: {order.message}</h4>
                                <h4>Status: {order.order_status}</h4>
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
