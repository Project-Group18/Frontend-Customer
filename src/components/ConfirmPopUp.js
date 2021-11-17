import React from 'react'
import styles from './ConfirmPopUp.module.css'

function  ConfirmPopUp(props) {
    return (props.trigger) ? (
    <div>
      
            <div className={styles.popup_inner}>
                <p> Items in your order:</p>
                
             <div className={styles.container}>
                <div className={styles.items}>
                   <p>Message:</p>
                   <textarea className={styles.msgBox} type="text" placeholder="Message"/>
                   <p>Credit card number:</p>
                   <input type="text" className={styles.creditCard} />
                </div>
             </div>

             <div className={styles.options}>
                
                <button className={styles.confirmButton}>
                    confirm payment
                </button>
             </div>

                <button className={styles.closeButton} onClick={() => props.setTrigger(false)}>&times;</button> 
        
            </div>
       <div onClick={() => props.setTrigger(false)} className={styles.popup}>   
       </div>
    
    </div>
      
    
    ) : "";
}

export default ConfirmPopUp