import React from 'react'
import styles from './Managerfrontpage.module.css';




function Managerfrontpage(props) {
    return (
      <div className="App">
        <header className={styles.background}>
  
          <div >
              <div className={styles.Headercontainer}>
                  <img className={styles.image} src='olivertwistLogo1.jpg' alt='picture'/>
  
                  <div className={styles.Account}>
                    <button>Log in</button>
                    <button>Sign up</button>
                    <i className={styles.shoppingcart} > Log in</i>
                  </div>
              
              </div>
              <div className={styles.OrderStats}>
                  <div>
                      <p><span>Order Number:</span>{props.orderNumber}</p>
                  </div>
                  <div className={styles.OrderStatus}>
                      <p>
                    <label>
                        Status:
                        <select>
                            <option>Being Prepared</option>
                            <option>Order is Ready</option>
                            <option>Order is on it's way</option>
                         </select>
                    </label>
                   </p>
  
                  </div>
              </div>
              <div className={styles.OrderInfoContainer}>
                  <div className={styles.OrderDetailContainer}>
                      <div>
                          <p>Order Number:<span>{props.orderNumber}</span></p>
                          <p>Address:<span>{props.address}</span></p>
                          <p>Customer Name:<span>{props.customerName}</span></p>
                          <p>Phone Number:<span>{props.phoneNumber}</span></p>
                          <p>Order ID:<span>{props.orderId}</span></p>
                      </div>
                      <div>
                          <p>Notes:<span>{props.notes}</span> </p>
                      </div>
                  </div>
                  <div>
                      <p>Message: <span>{props.message}</span></p>
                  </div>
              </div>
        
                
  
           
  
          </div>
        </header>
        <footer>
          
          <div className={styles.footer}>
            <p>Terms of service</p>
            <p>Contact us</p>
            <p>About us</p>
            <p className={styles.restaurantLogin}>For restaurants</p>
  
            <div className={styles.socialmedia}>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-twitter-square"></i>
            <i class="fab fa-instagram-square"></i>
            </div>
          </div>
  
        </footer>
      </div>
    );
  }
  
  export default Managerfrontpage;
  


// function Managerfrontpage() {
//   return (
//     <div className="App">
//       <header className={styles.background}>

//         <div >
//             <div className={styles.Headercontainer}>
//                 <img className={styles.image} src='olivertwistLogo1.jpg' alt='picture'/>

//                 <div className={styles.Account}>
//                   <button>Log in</button>
//                   <button>Sign up</button>
//                   <i className={styles.shoppingcart} > Log in</i>
//                 </div>
            
//             </div>
//             <div className={styles.OrderStats}>
//                 <div>
//                     <p>Order Number:</p>
//                 </div>
//                 <div className={styles.OrderStatus}>
//                     <p>Status: </p>
//                     <select>
//                         <option>Being Prepared</option>
//                         <option>Order is Ready</option>
//                         <option>Order is on it's way</option>
//                     </select>

//                 </div>
//             </div>
//             <div className={styles.OrderInfoContainer}>
//                 <div className={styles.OrderDetailContainer}>
//                     <div>
//                         <p>Order Number:</p>
//                         <p>Address:</p>
//                         <p>Customer Name:</p>
//                         <p>Phone Number:</p>
//                         <p>Order ID:</p>
//                     </div>
//                     <div>
//                         <p>Notes: </p>
//                     </div>
//                 </div>
//                 <div>
//                     <p>Message: </p>
//                 </div>
//             </div>
      
              

         

//         </div>
//       </header>
//       <footer>
        
//         <div className={styles.footer}>
//           <p>Terms of service</p>
//           <p>Contact us</p>
//           <p>About us</p>
//           <p>For restaurants</p>

//           <div className={styles.socialmedia}>
//           <i class="fab fa-facebook"></i>
//           <i class="fab fa-twitter-square"></i>
//           <i class="fab fa-instagram-square"></i>
//           </div>
//         </div>

//       </footer>
//     </div>
//   );
// }

// export default Managerfrontpage;
