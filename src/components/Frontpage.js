import React, { useState, useEffect } from 'react'
import styles from './Frontpage.module.css';
import CustomerOrder from './CustomerOrder'
import api from '../api/config'
import { Link } from 'react-router-dom'
import jwtFromWeb from 'jsonwebtoken';
import apiCustomer from '../api/config_customer';
import Restaurant from './Restaurant';
function Frontpage(props) {

  const {jwt} = props;
  const [restaurants, setRestaurant ] = useState([]);
  const decodedToken = jwtFromWeb.decode(jwt);
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  //get all restaurants from restaurant table
  useEffect(() => {
    const fetchRestaurant =  async () => {
    try {const res = await api.get('/restaurant');
    console.log(res);
    setRestaurant(res.data)
    } catch (err) {//Not in 200 response range
        console.log(err);
    }}
    fetchRestaurant();
  }, [])

  //get all orders using customer id
  useEffect(() => {
    const loadOrdersWithJWT =  async () => {
    try {const res = await apiCustomer.get('getOrders/customer/'+decodedToken.user.id.toString(),
    {
    headers: {
    'Authorization': 'Bearer ' +jwt
    }
    }
    );
    console.log(res);
    setOrders(res.data)
    } catch (err) {//Not in 200 response range
    console.log(err);
    }}
    loadOrdersWithJWT();
  }, [])

  useEffect(() => {
    const results = 
    restaurants.filter((restaurant)=> 
    restaurant.restaurant_name.toUpperCase().includes(searchTerm.toUpperCase())
    ||
    restaurant.restaurant_type.toUpperCase().includes(searchTerm.toUpperCase())
    );
    setRestaurant(results);
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
        <br/>

       {/*  Temporary conditional rendering to show if the user is logged in */}
      <div>User logged status: {props.userLoggedIn ? "is logged in" : "not logged in"} </div>

        

            {/* WE SHOULD CONSIDER MAKING THIS A MODAL SO THAT IT WOULDN'T BE ON THE WAY */}
        <div>
        {props.userLoggedIn ? 
        <>
        <br/>
        <div className={styles.OrderStats}>
          <CustomerOrder orders={orders} jwt={jwt}/>
          <div className={styles.OrderStatus}></div>
        </div>
        </> :  <> </>}
        </div>

            <div className={styles.onSale}>
            <img className={styles.ufo} src='ufo2.png' alt=''/>
            </div>
            

      <p className={styles.categories}> Restaurant selection</p>
      <div className= {styles.restaurantsContainer}>
      <Restaurant restaurants={restaurants}/> 
      </div>


              <br/>            
            
      
      </header>
      </div>
  );
  }


export default Frontpage;
