import React from 'react'
import styles from './CustomerMyAccountPage.module.css';
import { useState } from 'react';
import { Outlet } from 'react-router-dom'
import LogOutPopUp from './LogOut.js';  

export default function CustomerMyAccountPage(props) {
    const [setEditProfile] = useState(false);
    const [buttonLogOut, setButtonLogOut] = useState(false);

    return (
        <div className="App">
        
        


        <div class={styles.heading}><b>My Profile</b></div>
        
        <div class={styles.myaccountinfo}>
        
        <div>Name:</div><input className={styles.searchbar} type="name" placeholder= {props.cName}></input> 
        <div>Default Address:</div><input className={styles.searchbar} type="address" placeholder= {props.cAddress}></input> 
        <div>Credit card number:</div><input className={styles.searchbar} type="creditcard" placeholder= {props.cCreditCardNumber}></input> 
        <div>Email:</div><input className={styles.searchbar} type="email" placeholder= {props.cEmail}></input> 
        
        </div>
        <button onClick={() => setEditProfile(true)}class={styles.heading}>Edit Profile</button>
        <div class={styles.heading}><b>Order History</b></div>
       
        <div> 
        <div className={styles.OrderInfoContainer}>
        <div className={styles.scrolldiv}>
                  <div className={styles.OrderDetailContainer}>
                      <div>
                          <p>Order Number:<span>{props.orderNumber}</span></p>
                          <p>Address:<span>{props.address}</span></p>
                          <p>Customer Name:<span>{props.customerName}</span></p>
                          <p>Phone Number:<span>{props.phoneNumber}</span></p>
                          <p>Message: <span>{props.message}</span></p>
                        
                      </div>
                      <div className={styles.status}>
                          <p>Status:<span>{props.notes}</span> </p>
                      </div>
                 
                       
                    </div>

                    <div className={styles.OrderDetailContainer}>
                      <div>
                          <p>Order Number:<span>{props.orderNumber}</span></p>
                          <p>Address:<span>{props.address}</span></p>
                          <p>Customer Name:<span>{props.customerName}</span></p>
                          <p>Phone Number:<span>{props.phoneNumber}</span></p>
                          <p>Message: <span>{props.message}</span></p>
                      </div>
                      <div className={styles.status}>
                          <p>Status:<span>{props.notes}</span> </p>
                      </div>
                  </div>
                  <div className={styles.OrderDetailContainer}>
                      <div>
                          <p>Order Number:<span>{props.orderNumber}</span></p>
                          <p>Address:<span>{props.address}</span></p>
                          <p>Customer Name:<span>{props.customerName}</span></p>
                          <p>Phone Number:<span>{props.phoneNumber}</span></p>
                          <p>Message: <span>{props.message}</span></p>
                      </div>
                      <div className={styles.status}>
                          <p>Status:<span>{props.notes}</span> </p>
                      </div>
              </div>
              <div className={styles.OrderDetailContainer}>
                      <div>
                          <p>Order Number:<span>{props.orderNumber}</span></p>
                          <p>Address:<span>{props.address}</span></p>
                          <p>Customer Name:<span>{props.customerName}</span></p>
                          <p>Phone Number:<span>{props.phoneNumber}</span></p>
                          <p>Message: <span>{props.message}</span></p>
                      </div>
                      <div className={styles.status}>
                          <p>Status:<span>{props.notes}</span> </p>
                      </div>
              </div>
              </div>
              </div>
              </div>


        </div>
    )
}
