import React from 'react'
import styles from './RestaurantInfoPage.module.css'
import {useLocation} from 'react-router-dom';


export default function RestaurantInfoPage(props) {

  const location = useLocation();

    return (
        <div>

         <div className={styles.heading}><b>{location.state.name}</b></div>


        <div className={styles.restaurantInfoContainer}>
        <div className={styles.info}>
        <div>Restaurant type: { location.state.type}</div>
        <div>Open Hours: {location.state.hours}</div>
        <div>Price Level: {location.state.pricelvl}</div>
        <div>Address: {location.state.location}</div>
        
        </div>
        <img className={styles.restaurantPlaceholder} src='restaurantPlaceHolderIcon.jpg' alt='picture'/>
        </div>
        <div className={styles.menuInfoContainer}>
        <div className={styles.menuContainer}>
        <div className={styles.menuHeading}>Menu</div>
        <div className={styles.menuCategory}>
        <div>Recommended</div>
        </div>
        </div>
        <div className={styles.infoContainer}>
        <div className={styles.scrolldiv}>
                    <div className={styles.detailContainer}>
                    <div>
                          <p>Food Name:<span>{props.dName}</span></p>
                          <p>Food gategory:<span>{props.dCategory}</span></p>
                          <p>Price:<span>{props.dPrice}</span></p>
                          <p>Restaurant:<span>{props.dRestaurant}</span></p>
                      </div>
                      <div className={styles.pictureAndShoppingCart}>
                        <img className={styles.placeholder} src='restaurantPlaceHolderIcon.jpg' alt='picture'/>
                        <button className={styles.button}><i className={styles.shoppingcart} class="fas fa-cart-arrow-down"></i></button>
                      </div>
                    </div>
              </div>
              </div>
              </div>
      </div>
    )
}
