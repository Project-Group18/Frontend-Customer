import React from 'react'
import styles from './SearchResultPage.module.css'
import {useLocation} from 'react-router-dom';

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

                {location.state.restaurants.map(restaurant => 
                <div key={restaurant.restaurant_id}>
                  {/* The console will complain that the unique key value is missing but that
                  is just before it is give here. */}
                  <ul >ID: {restaurant.restaurant_id}</ul>
                  <ul>Name: {restaurant.restaurant_name}</ul>
                  <ul>Type: {restaurant.restaurant_type}</ul>
                  <ul>Hours: {restaurant.open_hours}</ul>
                  <ul>PriceLevel: {restaurant.price_level}</ul>
                  <ul>Location: {restaurant.location}</ul>
                  <br/>
                </div>
                )} 


               {/* <h2>  Listing all dishes here </h2>
                {location.state.dishes.map(dish => 
                <div> */}

                  {/* The console will complain that the unique key value is missing but that
                  is just before it is give here. */}

                  {/* <ul key={dish.dish_id}>ID: {dish.dish_id}</ul>
                      
                  <ul>Name: {dish.dish_name}</ul>
                  <ul>dish gategory id: {dish.category_id}</ul>
                  <ul>Price: {dish.price}</ul>
                  <ul>Info: {dish.dish_info}</ul>
                  <ul>Restaurant ID: {dish.restaurant_id}</ul>
                  <br/>
                </div>
                )}  */}



        {/* <div> 
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
              </div> */}



          <div className={styles.InfoContainer}>
            <div className={styles.scrolldiv}>
           {/*  {
            props.dishData.map(dish => <DishItem {...dish} key = {dish.dId} />)
            } */}
            </div>    
          </div>
        </div>
              
    )
}
