import React from 'react'
import styles from './FoodCategoriesPage.module.css'
import { useState } from 'react';
import {Link} from 'react-router-dom';

export default function FoodCategoriesPage(props) {
  
  
  return (
        <div>
        

        {/* <div class={styles.heading}><b>Foods under this category</b></div> */}
        {/* <button class={styles.button}>Show restaurants under this category</button> */}
        
        
        <div key={props.restaurant_id} >
                <ul>ID: {props.restaurant_id}</ul>
                <ul>Name: {props.restaurant_name}</ul>
                <ul>Type: {props.restaurant_type}</ul>
                <ul>Hours: {props.open_hours}</ul>
                <ul>PriceLevel: {props.price_level}</ul>
                <ul>Location: {props.location}</ul>
                {/* <button onClick={() => setRestButton()}>Choose restaurant {props.restaurant_id}</button> */}
                
                <Link to='restaurantinfopage'{...props.restaurant_id}>
                  Choose a restaurant {props.restaurant_id}
                </Link>
                </div>

        
       
            {/* <div className={styles.InfoContainer}>
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
              </div>
            </div> */}
        </div>
    )
}
