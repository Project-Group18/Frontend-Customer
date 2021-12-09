import React from 'react'
import styles from './Restaurant.module.css'
import { Link } from 'react-router-dom';
import {Image} from 'cloudinary-react'

export default function Restaurant(props) {
    const {restaurants} = props;
    
    return (
    <div className={styles.restaurantsContainer}>
        {restaurants.map(restaurant =>
            <div  key = {restaurant.restaurant_id}>

            <div >
                <div className={styles.oneRestaurant} >
                <div >
                    <br/>
                    <button className={styles.button}><Link to= {{ 
                        pathname: '/restaurantinfopage/' + restaurant.restaurant_id.toString()}} 
                        state={{restaurant,
                        }}
                        >
                        <div className={styles.link}>Visit Restaurant {restaurant.restaurant_id}</div>
                        </Link>
                    </button>

                    <ul>ID: {restaurant.restaurant_id}</ul>
                    <ul>Name: {restaurant.restaurant_name}</ul>
                    <ul>Type: {restaurant.restaurant_type}</ul>
                    <ul>Hours: {restaurant.open_hours}</ul>
                    <ul>PriceLevel: {restaurant.price_level}</ul>
                    <ul>Location: {restaurant.location}</ul>
                    
                    <br/>
                </div>
                <div>
                <Image className={styles.placeholder} cloudName="dczwvybll"
                    publicId={restaurant.restaurant_picture}/>
                </div>
                </div>
            </div>

            </div>
        )}
    </div>
    )
}
