import React from 'react'
import styles from './Register.module.css'

function RegisterPopUp(props) {
    return (props.trigger) ? (
        <div className={styles.popup}>
            <div className={styles.popup_inner}>
                <div className= {styles.popup_text_container}>
                    <p>*Username:</p>
                    <input type="text" placeholder="username*"></input>
                    <p>*Password:</p>
                    <input type="text" placeholder="password*"></input>
                    <p>*Input password again:</p>
                    <input type="text" placeholder="password*"></input>
                    <p>*Email</p>
                    <input type="text" placeholder="Email*"></input>
                    <p>Address</p>
                    <input type="text" placeholder="Address*"></input>
                    
                    <button className={styles.registerButton}>Register now!</button>
                </div>
                <button className={styles.closeButton} onClick={() => props.setTrigger(false)}>X</button>
            </div>
        </div>
    ) : "";
}

export default RegisterPopUp