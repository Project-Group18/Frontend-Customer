import React, { useState } from 'react'
import styles from './CustomerOrder.module.css'
import api from '../api/config_customer';
import { useNavigate } from 'react-router-dom';
import jwtFromWeb from 'jsonwebtoken';

export default function CustomerOrder(props) {

    const {orders, jwt} = props;
    const decodedToken = jwtFromWeb.decode(jwt);
    const navigate = useNavigate();

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
            
            console.log("updated state successfully");
            console.log(res);
            setTimeout(() => {
                navigate('/')
            }, 1500);
           
           
                    
            } catch (error) {
               console.log(error)
            }
            
            } 
            updateOrder();
        }


    return (
        <div className={styles.OrderDetailContainer}>

            <div >
                {orders.map(order => 
                <form key={order.order_id} onSubmit={handleUpdate}>
                    {/* <div>{order.order_id}</div> */}
                    <input name="orderid" value={order.order_id}/>
                    <div >{order.address}</div>
                    <div>{order.message}</div>
                    <div>{order.order_status}</div>
                    <div>{order.order_arrival_time}</div>
                    <button type="submit" className={styles.deliveredButton}>Finish order</button>
                    
                    <hr/>
                </form>
                )}
            </div>



        </div>
    )
}
