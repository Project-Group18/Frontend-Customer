import React from 'react'
import styles from './Restaurant.module.css'
import { Link } from 'react-router-dom';


export default function Restaurant(props) {
    const {restaurants} = props;
    
    return (
    <div>
        {restaurants.map(r =>
            <div key = {r.restaurant_id}>

            <div className={styles.r}>
                <div>
                    <br/>
                    <button className={styles.button}><Link to= {{ 
                        pathname: '/restaurantinfopage/' + r.restaurant_id.toString()}} 
                        state={{r,
                        }}
                        >
                        <div className={styles.link}>Visit Restaurant {r.restaurant_id}</div>
                        </Link>
                    </button>

                    <ul>ID: {r.restaurant_id}</ul>
                    <ul>Name: {r.restaurant_name}</ul>
                    <ul>Type: {r.restaurant_type}</ul>
                    <ul>Hours: {r.open_hours}</ul>
                    <ul>PriceLevel: {r.price_level}</ul>
                    <ul>Location: {r.location}</ul>
                    
                    <br/>
                </div>
                <img className={styles.placeholder} src='restaurantPlaceHolderIcon.jpg' alt='picture'/>
            </div>

            </div>
        )}
    </div>
    )
}
