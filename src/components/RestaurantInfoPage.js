import React, { useContext } from 'react'
import styles from './RestaurantInfoPage.module.css'
import { ContextTest } from './Contexts';

export default function RestaurantInfoPage(props) {

  const contextValue = useContext(ContextTest)

    return (
        <div>
              {props.restaurant}
         <div className={styles.heading}><b>Placeholder restaurant name</b></div>

          <p>This is the given context value: {contextValue}</p>

        {/* <div className={styles.restaurantInfoContainer}>
        <div className={styles.info}>
        <div>Restaurant type: Fast casual</div>
        <div>Open Hours: 11-23</div>
        <div>Price Level: €€</div>
        <div>Address: Saaristonkatu 12, 90100 Oulu</div>
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
              </div> */}
      </div>
    )
}
