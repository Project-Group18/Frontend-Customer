import React from 'react'
import styles from './RestaurantInfoPage.module.css'
import {useLocation, useParams} from 'react-router-dom';
import DishItem from './DishItem.js'
import api from '../api/config';
import { useState, useEffect } from 'react';
import {Image} from 'cloudinary-react'


export default function RestaurantInfoPage(props) {

    const {onAdd} = props;
    const location = useLocation();
    const {restaurant} = location.state;
    console.log("r!!!!!!")
    console.log(location.state);
      let {restID} = useParams();

    const [dishes, setdishes ] = useState([]);
    const [categories, setCategories ] = useState([]);


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

  //get all categories with restaurant id
  useEffect(() => {
    const path = 'restaurant/' + restID+'/category';
  api.get(path)
    .then(res => {
        console.log("categories with restID")
        console.log(res);
        setCategories(res.data)
    })
  .catch (function (err) {//Not in 200 response range
      console.log(err);
  })
}, [])



    return (
    <div>
        <div className={styles.restaurantInfoContainer}>
            <div className={styles.info}>
                <div className={styles.name}>{ restaurant.restaurant_name}</div>    
                <div>Restaurant type: { restaurant.restaurant_type}</div>
                <div>Open Hours: {restaurant.open_hours}</div>
                <div>Price Level: {restaurant.price_level}</div>
                <div>Address: {restaurant.location}</div>
                <br/>   
            </div>
                <Image className={styles.picture} cloudName="dczwvybll"
                    publicId={restaurant.restaurant_picture}/>
            </div>

            <div className={styles.menuInfoContainer}>
                <div className={styles.menuContainer}>
                    <div className={styles.menuHeading}>
                        Restaurant categories
                    </div>
                    <div className={styles.menuCategory}>
                        {categories.map(catElement =>
                            <ul>{catElement.category_name}</ul>
                            )}
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





