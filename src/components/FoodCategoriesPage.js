import React from 'react'
import styles from './FoodCategoriesPage.module.css'

export default function FoodCategoriesPage(props) {
    return (
        <div className="App">
        

        <div class={styles.heading}><b>Foods under this category</b></div>
        
        <button class={styles.button}>Show restaurants under this category</button>
        <div className={styles.InfoContainer}>
        <div className={styles.scrolldiv}>
                  <div className={styles.DetailContainer}>
                    <div>
                        <p>Food Name:<span>{props.dName}</span></p>
                        <p>Food gategory:<span>{props.dCategory}</span></p>
                        <p>Price:<span>{props.dPrice}</span></p>
                        <p>Restaurant:<span>{props.dRestaurant}</span></p>
                    </div>
                      <div>
                      <img className={styles.Placeholder} src='restaurantPlaceHolderIcon.jpg' alt='picture'/>
                      </div>
                 
                       
                    </div>
                    <div className={styles.DetailContainer}>
                    <div>
                          <p>Food Name:<span>{props.dName}</span></p>
                          <p>Food gategory:<span>{props.dCategory}</span></p>
                          <p>Price:<span>{props.dPrice}</span></p>
                          <p>Restaurant:<span>{props.dRestaurant}</span></p>
                      </div>
                      <div>
                      <img className={styles.Placeholder} src='restaurantPlaceHolderIcon.jpg' alt='picture'/>
                      </div>
                 
                       
                    </div>
                    <div className={styles.DetailContainer}>
                      <div>
                          <p>Food Name:<span>{props.dName}</span></p>
                          <p>Food gategory:<span>{props.dCategory}</span></p>
                          <p>Price:<span>{props.dPrice}</span></p>
                          <p>Restaurant:<span>{props.dRestaurant}</span></p>
                      </div>
                      <div>
                      <img className={styles.Placeholder} src='restaurantPlaceHolderIcon.jpg' alt='picture'/>
                      </div>
                 
                       
                    </div>
                    <div className={styles.DetailContainer}>
                    <div>
                          <p>Food Name:<span>{props.dName}</span></p>
                          <p>Food gategory:<span>{props.dCategory}</span></p>
                          <p>Price:<span>{props.dPrice}</span></p>
                          <p>Restaurant:<span>{props.dRestaurant}</span></p>
                      </div>
                      <div>
                      <img className={styles.Placeholder} src='restaurantPlaceHolderIcon.jpg' alt='picture'/>
                      </div>
                 
                       
                    </div>

              
              </div>
              </div>
        </div>
    )
}
