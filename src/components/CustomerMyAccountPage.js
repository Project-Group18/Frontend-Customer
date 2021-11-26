import React from 'react'
import styles from './CustomerMyAccountPage.module.css';
import { useState } from 'react';
import { Outlet } from 'react-router-dom'
import LogOutPopUp from './LogOut.js';  
import {useLocation} from 'react-router-dom';

export default function CustomerMyAccountPage(props) {
    const [setEditProfile] = useState(false);
    const [buttonLogOut, setButtonLogOut] = useState(false);
    
    const location = useLocation();

    return (
        <div>
        
        <div class={styles.heading}><b>My Profile</b></div>
        


        <div class={styles.myaccountinfo}>
        
        <div>Name:</div><input className={styles.searchbar} type="name" placeholder= {location.state.name}></input> 
        <div>Default Address:</div><input className={styles.searchbar} type="address" placeholder= {location.state.address}></input> 
        <div>Credit card number:</div><input className={styles.searchbar} type="creditcard" placeholder= {location.state.credit_card}></input> 
        <div>Email:</div><input className={styles.searchbar} type="email" placeholder= {location.state.email}></input> 
        
        </div>
        <button onClick={() => setEditProfile(true)}class={styles.heading}>Edit Profile</button>
        <div class={styles.heading}><b>Order History</b></div>
       
        <div> 
        <div className={styles.OrderInfoContainer}>
        <div className={styles.scrolldiv}>
                  <div className={styles.OrderDetailContainer}>
                      <div>
                          <p>Order Number:<span>{location.state.orderNumber}</span></p>
                          <p>Address:<span>{location.state.address}</span></p>
                          <p>Customer Name:<span>{location.state.customerName}</span></p>
                          <p>Phone Number:<span>{location.state.phoneNumber}</span></p>
                          <p>Message: <span>{location.state.message}</span></p>
                        
                      </div>
                      <div className={styles.status}>
                          <p>Status:<span>{location.state.notes}</span> </p>
                      </div>
                 
                       
                    </div>

                    <div className={styles.OrderDetailContainer}>
                      <div>
                          <p>Order Number:<span>{location.state.orderNumber}</span></p>
                          <p>Address:<span>{location.state.address}</span></p>
                          <p>Customer Name:<span>{location.state.customerName}</span></p>
                          <p>Phone Number:<span>{location.state.phoneNumber}</span></p>
                          <p>Message: <span>{location.state.message}</span></p>
                      </div>
                      <div className={styles.status}>
                          <p>Status:<span>{location.state.notes}</span> </p>
                      </div>
                  </div>
                  <div className={styles.OrderDetailContainer}>
                      <div>
                          <p>Order Number:<span>{location.state.orderNumber}</span></p>
                          <p>Address:<span>{location.state.address}</span></p>
                          <p>Customer Name:<span>{location.state.customerName}</span></p>
                          <p>Phone Number:<span>{location.state.phoneNumber}</span></p>
                          <p>Message: <span>{location.state.message}</span></p>
                      </div>
                      <div className={styles.status}>
                          <p>Status:<span>{location.state.notes}</span> </p>
                      </div>
              </div>
              <div className={styles.OrderDetailContainer}>
                      <div>
                          <p>Order Number:<span>{location.state.orderNumber}</span></p>
                          <p>Address:<span>{location.state.address}</span></p>
                          <p>Customer Name:<span>{location.state.customerName}</span></p>
                          <p>Phone Number:<span>{location.state.phoneNumber}</span></p>
                          <p>Message: <span>{location.state.message}</span></p>
                      </div>
                      <div className={styles.status}>
                          <p>Status:<span>{location.state.notes}</span> </p>
                      </div>
              </div>
              </div>
              </div>
              </div> 


        </div>
    )
}
