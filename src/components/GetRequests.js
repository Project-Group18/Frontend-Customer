import React from 'react'
import { useState, useEffect } from 'react';
import api from '../api/config';
import styles from './GetRequests.module.css'

function GetRequests() {

    const [getCustomer, setCustomer ] = useState([]);
    const [getRestaurant, setRestaurant ] = useState([]);

    useEffect(() => {
        const fetchCustomer =  async () => {
            try {const res = await api.get('/customer');
            console.log(res);
            setCustomer(res.data)
            } catch (err) {//Not in 200 response range
            }}
            fetchCustomer();
        }, [])

    useEffect(() => {
        const fetchRestaurant =  async () => {
        try {const res = await api.get('/restaurant');
        console.log(res);
        setRestaurant(res.data)
        } catch (err) {//Not in 200 response range
        }}
        fetchRestaurant();
    }, [])


    return (
        <div>

            <h1>Customer information:</h1>
             <div>

            
                {getCustomer.map(customer => (
                <li key={customer.customer_id} className={styles.itemContainer} > 
                {customer.customer_id}
                <div>Name: {customer.customer_name},</div>
                <div>Email: {customer.customer_email},</div>
                <div>Address: {customer.home_address},</div>
                <div>Creditcard: {customer.credit_card},</div>
                <div>Password: {customer.customer_password}</div>
                </li>))} 
            </div>
          
            <h1>Restaurant information:</h1>
            <div>
              
                {getRestaurant.map(get => (
                <li key={get.restaurant_id} className={styles.itemContainer} >
                <div>ID: {get.restaurant_id},</div>
                <div>Name: {get.restaurant_name},</div>
                <div>Type: {get.restaurant_type},</div>
                <div>Hours: {get.open_hours},</div>
                <div>PriceLevel: {get.price_level},</div>
                <div>Location: {get.location},</div>
                </li>
                ))}
            </div>
        </div>
    )
}

export default GetRequests