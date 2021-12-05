import React from 'react'
import styles from './FrontpageLoggedIn.module.css';
import CustomerOrder from './CustomerOrder'
import { useNavigate, Link } from 'react-router-dom';
import Restaurant from './Restaurant';
import {useState, useEffect} from 'react'
import api from '../api/config';


function Frontpage2(props) {
 
  const [searchTerm, setSearchTerm] = useState("");
  const [restaurants, setRestaurants ] = useState([]);
  
      //get all restaurants/
      useEffect(() => {
        api.get('/restaurants')
          .then(res => {
              console.log(res);
              setRestaurants(res.data)
          })
        .catch (function (err) {//Not in 200 response range
            console.log(err);
        })
    }, [])

    useEffect(() => {
      const results = 
      restaurants.filter((restaurant)=> 
      restaurant.restaurant_name.toUpperCase().includes(searchTerm.toUpperCase())
      ||
      restaurant.restaurant_type.toUpperCase().includes(searchTerm.toUpperCase())
      );
      setRestaurants(results);
      }, [searchTerm]);

    
      const handleChange = event => {
        setSearchTerm(event.target.value);
        console.log(event.target.value);
      };

  return (
    <div className="App">
      <div className={styles.search}> 

      <input className={styles.searchbar} 
      type="searchtext" 
      placeholder= "Search for restaurants by name or type" 
      value={searchTerm}
      onChange={handleChange}
      />

      <button className={styles.searchbutton} onClick={console.log(restaurants)}><Link to= {{ pathname: '/searchresultpage/'}} 
      state={{
      restaurants
      }}
      >

      <div>Search</div>
      </Link></button>
      </div>



      <header className={styles.background}>

      <div>
        <div className={styles.OrderStats}>
            {
            props.orders.map(order => <CustomerOrder {
            ...order} key = {order.status}/>)
            }
            <div className={styles.OrderStatus}>
                <button className={styles.deliveredButton}>Mark as delivered
                </button>
            </div>
            </div>
        </div>
           
            
            <p className={styles.categories}> Restaurant selection</p>
            <div className= {styles.restaurantsContainer}>
            {restaurants.map(restaurant =>
            <div key = {restaurant.restaurant_id}>
            <Restaurant restaurant={restaurant}/> 
            </div>
            )}
           
            </div>
            
           
      </header>
      </div>
  );
  }


export default Frontpage2;