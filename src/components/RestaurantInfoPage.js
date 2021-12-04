import React from 'react'
import styles from './RestaurantInfoPage.module.css'
import {useLocation} from 'react-router-dom';
import DishItem from './DishItem.js'
import api from '../api/config';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function RestaurantInfoPage(props) {

    const {onAdd} = props;

    const location = useLocation();
      let {restID} = useParams();

    const [dishes, setdishes ] = useState([]);


    //get all dishes with restaurant id
    useEffect(() => {
        const path = 'restaurant/' + restID+'/menu';
      api.get(path)
        .then(res => {
            console.log("dishes with restID")
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
                <div>Restaurant ID: { location.state.r.restaurant_id}</div>    
                <div>Restaurant type: { location.state.r.restaurant_type}</div>
                <div>Open Hours: {location.state.r.open_hours}</div>
                <div>Price Level: {location.state.r.price_level}</div>
                <div>Address: {location.state.r.location}</div>
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

   {dishes.map(product =>
      <div>
          <DishItem key={product.dish_id} product={product} onAdd={onAdd}/>
      </div>
       )}

     
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}





