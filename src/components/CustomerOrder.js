import React, { useState } from 'react'
import styles from './CustomerOrder.module.css'
import api from '../api/config_customer';
import jwtFromWeb from 'jsonwebtoken';

export default function CustomerOrder(props) {

    const {orders, jwt} = props;
    const decodedToken = jwtFromWeb.decode(jwt);

        console.log("orders:")
        console.log(orders)

        var onGoingOrders = orders.filter(function (el)
        {
        return el.order_status != "Delivered";
        }
        );


    const handleUpdate = (event) => {
        event.preventDefault();
        console.log(event.target.orderid.value)
    
        const updateOrder =  async () => {
            try {const res = await api.put('/confirmDelivery', 
            {
                order_status: "Delivered",
                order_id: event.target.orderid.value,
                customer_id: decodedToken.user.id
            },
            {
                headers: {
                'Authorization': 'Bearer ' +jwt
                }
            } 
            );
            console.log(res);
            //forces component to refresh the page
            window.location.reload(false);
            } catch (error) {
               console.log(error)
            }
            
            } 
            updateOrder();
        }


    return (
        <div className={styles.OrderDetailContainer}>


                <div>

                    <div >
               
                        
                    {onGoingOrders.map(order =>
                    <form key={order.order_id} onSubmit={handleUpdate}>
                    <h4>ID: <input name="orderid" value={order.order_id}/></h4>
                    <h4 >Price: {order.total_price}€</h4>
                    <h4>Msg: {order.message}</h4>
                    <h4>Status: {order.order_status}</h4>
                    <h4><button type="submit" className={styles.deliveredButton}>Finish order</button></h4>

                    <hr/>
                    </form>
                    )}
                    </div>
                    
                </div>

        </div>
    )
}
