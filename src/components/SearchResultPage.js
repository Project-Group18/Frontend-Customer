import React from 'react'
import styles from './SearchResultPage.module.css'
import {useLocation, Link}  from 'react-router-dom';


//props removed
export default function SearchResultPage() {

  const location = useLocation();
  console.log("Following = location.state")
  console.log(location.state)
  console.log("Following = location.state.restaurants")
  console.log(location.state.restaurants)


    return (
        <div>
        


        <div class={styles.heading}><b>Search Results </b></div>
{/* 
                {location.state.restaurants.map(restaurant => 
                <div key={restaurant.restaurant_id}> */}
                  {/* The console will complain that the unique key value is missing but that
                  is just before it is give here. */}
                  {/* <ul >ID: {restaurant.restaurant_id}</ul>
                  <ul>Name: {restaurant.restaurant_name}</ul>
                  <ul>Type: {restaurant.restaurant_type}</ul>
                  <ul>Hours: {restaurant.open_hours}</ul>
                  <ul>PriceLevel: {restaurant.price_level}</ul>
                  <ul>Location: {restaurant.location}</ul>
                  <Link to = {{ 
                    pathname: '/restaurantinfopage/' + restaurant.restaurant_id.toString()}} 
                    state={{restaurant,
                    }}>Link</Link>
                  <br/>
                </div>
                )}  */}

          <div className={styles.InfoContainer}>
            <div className={styles.scrolldiv}>
              
              <div >
                {location.state.restaurants.map(restaurant => 
                <div className={styles.oneresult} key={restaurant.restaurant_id}>
                  {/* The console will complain that the unique key value is missing but that
                  is just before it is give here. */}
                  <ul >ID: {restaurant.restaurant_id}</ul>
                  <ul>Name: {restaurant.restaurant_name}</ul>
                  <ul>Type: {restaurant.restaurant_type}</ul>
                  <ul>Hours: {restaurant.open_hours}</ul>
                  <ul>PriceLevel: {restaurant.price_level}</ul>
                  <ul>Location: {restaurant.location}</ul>
                  <button className={styles.button}><Link to = {{ 
                    pathname: '/restaurantinfopage/' + restaurant.restaurant_id.toString()}} 
                    state={{restaurant,
                    }}><div className={styles.link}>Visit restaurant</div></Link></button>
                  <br/>
                </div>
                )}
              </div> 
            </div>    
          </div>
        </div>
              
    )
}
