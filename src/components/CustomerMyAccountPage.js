import React from 'react'
import styles from './CustomerMyAccountPage.module.css';
import { useState } from 'react';
import LogOutPopUp from './LogOut.js';  

export default function CustomerMyAccountPage(props) {
    const [setEditProfile] = useState(false);
    const [buttonLogOut, setButtonLogOut] = useState(false);

    return (
        <div className="App">
        
        <header className={styles.background}>
  
        <div >
        <div class={styles.Headercontainer}>
        <img className={styles.image} src='olivertwistLogo1.jpg' alt='picture'/>

              <div className={styles.Account}>
              <button>My account</button>
              <button onClick={() => setButtonLogOut(true)}>Log Out</button>
              <i className={styles.shoppingcart} class="fas fa-shopping-cart" ></i>
              </div>
        </div>
        </div> 
     </header>

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

        <footer>
          <div className={styles.footer}>
            <p>Terms of service</p>
            <p>Contact us</p>
            <p>About us</p>
            <p>For restaurants</p>
  
            <div className={styles.socialmedia}>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-twitter-square"></i>
            <i class="fab fa-instagram-square"></i>
            </div>
          </div>
  
        </footer>
        <LogOutPopUp trigger={buttonLogOut} setTrigger ={setButtonLogOut}/>




        </div>
    )
}
