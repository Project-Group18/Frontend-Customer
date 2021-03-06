import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <div>
        
        <div className={styles.footer}>
          <p>Terms of service</p>
          <p>Contact us</p>
          <p>About us</p>

          <div className={styles.socialmedia}>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter-square"></i>
          <i className="fab fa-instagram-square"></i>
          </div>
        </div>

        </div>
    )
}
