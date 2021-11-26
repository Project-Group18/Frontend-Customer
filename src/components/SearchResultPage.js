import React from 'react'
import styles from './SearchResultPage.module.css'
import DishItem from './DishItem.js'

export default function SearchResultPage(props) {
    return (
        <div className="App">
        

          <div class={styles.heading}><b>Search Results </b></div>

          <div className={styles.InfoContainer}>
            <div className={styles.scrolldiv}>
            {
            props.dishData.map(dish => <DishItem {...dish} key = {dish.dId} />)
            }
            </div>    
          </div>
        </div>
              
    )
}
