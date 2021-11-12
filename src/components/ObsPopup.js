import React from 'react'
import styles from './ObsPopup.module.css'

function ObsPopup(props) {
    return (props.trigger) ? (
        <div className={styles.popup}>
            <div className={styles.popup_inner}>
                <div className= {styles.popup_text_container}>
                <h1>Please log in or register first!</h1>
                <br/>
                <button>Log in</button>
                <br/>
                <button>Register</button>
                </div>
                <button onClick={() => props.setTrigger(false)}>close button</button>
            </div>
        </div>
    ) : "";
}

export default ObsPopup
