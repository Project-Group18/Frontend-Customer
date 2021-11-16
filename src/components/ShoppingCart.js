import React from 'react'
import styles from './ShoppingCart.module.css'

function ShoppingCartPopUp(props) {
    return (props.trigger) ? (
    <div>
      
            <div className={styles.popup_inner}>
                <p> Items in your order:</p>
                
             <div className={styles.container}>
                <div className={styles.items}>
                    <p>ITEM1</p>
                    <p>ITEM2</p>
                    <p>ITEM3</p>
                </div>
             </div>

             <div className={styles.options}>
                <button className={styles.cancelButton}>
                    cancel order
                </button>
                <button className={styles.confirmButton}>
                    confirm
                </button>
             </div>

                <button className={styles.closeButton} onClick={() => props.setTrigger(false)}>&times;</button> 
        
            </div>
       <div onClick={() => props.setTrigger(false)} className={styles.popup}>   
       </div>
       
    </div>
      
    
    ) : "";
}

export default ShoppingCartPopUp