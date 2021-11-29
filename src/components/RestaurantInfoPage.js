import React from 'react'
import styles from './RestaurantInfoPage.module.css'
import {useLocation} from 'react-router-dom';
import DishItem from './DishItem.js'
import api from '../api/config';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function RestaurantInfoPage() {

    const location = useLocation();
      let {restID} = useParams();

    const [dishes, setdishes ] = useState([]);


    //get all dishes with restaurant id
    useEffect(() => {
        const path = 'dish/' + restID;
      api.get(path)
        .then(res => {
            console.log(res);
            setdishes(res.data)
        })
      .catch (function (err) {//Not in 200 response range
          console.log(err);
      })
  }, [])


    return (
    <div>
        <div className={styles.restaurantInfoContainer}>
            <div className={styles.info}>
                <div>Restaurant ID: { location.state.restaurant.restaurant_id}</div>    
                <div>Restaurant type: { location.state.restaurant.restaurant_type}</div>
                <div>Open Hours: {location.state.restaurant.open_hours}</div>
                <div>Price Level: {location.state.restaurant.price_level}</div>
                <div>Address: {location.state.restaurant.location}</div>
                <br/>   
            </div>
                <a><img src='restaurantPlaceHolderIcon.jpg' alt='picture'/></a>
            </div>

            <div className={styles.menuInfoContainer}>
                <div className={styles.menuContainer}>
                    <div className={styles.menuHeading}>
                        Menu
                    </div>
                    <div className={styles.menuCategory}>
                        Recommended
                    </div>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.scrolldiv}>
                    <div>
                    {
                    dishes.map(dish => <DishItem {
                    ...dish} key = {dish.dish_id} />)
                    }
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}





