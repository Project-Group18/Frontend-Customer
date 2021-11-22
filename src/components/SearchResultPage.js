import React from 'react'
import styles from './SearchResultPage.module.css'

export default function SearchResultPage(props) {
    return (
        <div className="App">
        

        <div class={styles.heading}><b>Search Results </b></div>
        
        <div> 
        <div className={styles.InfoContainer}>
        <div className={styles.scrolldiv}>
                  <div className={styles.detailContainer}>
                    <div>
                        <p>Food Name:<span>{props.dName}</span></p>
                        <p>Food gategory:<span>{props.dCategory}</span></p>
                        <p>Price:<span>{props.dPrice}</span></p>
                        <p>Restaurant:<span>{props.dRestaurant}</span></p>
                    </div>
                      <div>
                      <img className={styles.placeholder} src='restaurantPlaceHolderIcon.jpg' alt='picture'/>
                      </div>
                 
                       
                    </div>
                    <div className={styles.detailContainer}>
                    <div>
                          <p>Food Name:<span>{props.dName}</span></p>
                          <p>Food gategory:<span>{props.dCategory}</span></p>
                          <p>Price:<span>{props.dPrice}</span></p>
                          <p>Restaurant:<span>{props.dRestaurant}</span></p>
                      </div>
                      <div>
                      <img className={styles.placeholder} src='restaurantPlaceHolderIcon.jpg' alt='picture'/>
                      </div>
                 
                       
                    </div>
                    <div className={styles.detailContainer}>
                      <div>
                          <p>Food Name:<span>{props.dName}</span></p>
                          <p>Food gategory:<span>{props.dCategory}</span></p>
                          <p>Price:<span>{props.dPrice}</span></p>
                          <p>Restaurant:<span>{props.dRestaurant}</span></p>
                      </div>
                      <div>
                      <img className={styles.placeholder} src='restaurantPlaceHolderIcon.jpg' alt='picture'/>
                      </div>
                 
                       
                    </div>
                    <div className={styles.detailContainer}>
                    <div>
                          <p>Food Name:<span>{props.dName}</span></p>
                          <p>Food gategory:<span>{props.dCategory}</span></p>
                          <p>Price:<span>{props.dPrice}</span></p>
                          <p>Restaurant:<span>{props.dRestaurant}</span></p>
                      </div>
                      <div>
                      <img className={styles.placeholder} src='restaurantPlaceHolderIcon.jpg' alt='picture'/>
                      </div>
                 
                       
                    </div>

              
              </div>
              </div>
              </div>

        </div>
    )
}
