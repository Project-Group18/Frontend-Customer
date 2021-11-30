import React from 'react'
import styles from './CustomerOrder.module.css'

export default function CustomerOrder(props) {
    return (
        <div className={styles.OrderDetailContainer}>

            {/* <div>
                <p>Order Number:<span>{location.state.order_id}</span></p>
                <p>Address:<span>{location.state.address}</span></p>
                <p>Customer Name:<span>{location.state.customerName}</span></p>
                <p>Message: <span>{location.state.message}</span></p>    
            </div> */}
            <div>
                <p>Order Number:<span>{props.order_id}</span></p>
                <p>Address:<span>{props.address}</span></p>
                <p>Customer Name:<span>{props.customerName}</span></p>
                <p>Message: <span>{props.message}</span></p>    
            </div>

            <div className={styles.status}>
                <p>Status:<span>{props.status}</span> </p>
            </div> 

        </div>
    )
}
