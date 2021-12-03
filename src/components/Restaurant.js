import React from 'react'
import styles from './Restaurant.module.css'
import { useNavigate, Link } from 'react-router-dom';


export default function Restaurant(props) {
    const {restaurant} = props;
    
    return (
        <div>
            
        <div className={styles.restaurant}>
            <div>
            <br/>
            <button className={styles.button}><Link to= {{ 
                pathname: '/restaurantinfopage/' + restaurant.restaurant_id.toString()}} 
                state={{restaurant,
                }}
                >
                <div className={styles.link}>Visit Restaurant {restaurant.restaurant_id}</div>
                </Link></button>

                <ul>ID: {restaurant.restaurant_id}</ul>
                <ul>Name: {restaurant.restaurant_name}</ul>
                <ul>Type: {restaurant.restaurant_type}</ul>
                <ul>Hours: {restaurant.open_hours}</ul>
                <ul>PriceLevel: {restaurant.price_level}</ul>
                <ul>Location: {restaurant.location}</ul>
            <br/>
            </div>
                <img className={styles.placeholder} src='restaurantPlaceHolderIcon.jpg' alt='picture'/>
              
        </div>
        </div>
    )
}
