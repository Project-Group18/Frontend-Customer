import React, { useState, useEffect } from 'react'
import styles from './Frontpage.module.css';
import CustomerOrder from './CustomerOrder'
import api from '../api/config'
import { Link } from 'react-router-dom'
import jwtFromWeb from 'jsonwebtoken';
import apiCustomer from '../api/config_customer';
function Frontpage(props) {
  const {jwt} = props;
  const [restaurants, setRestaurant ] = useState([]);
  const decodedToken = jwtFromWeb.decode(jwt);
  const [orders, setOrders] = useState([]);

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


  return (
    <div className="App">
      <header className={styles.background}>


        {/* WE SHOULD CONSIDER MAKING THIS A MODAL SO THAT IT WOULDN'T BE ON THE WAY */}
        <div>
          {props.userLoggedIn ? 
          //if user is logged in, render current orders here
          <>
          <div className={styles.OrderStats}>
          {/* {
          props.orders.map(o => <CustomerOrder {
          ...o} key = {o.status}/>)
          } */}
          <div className={styles.OrderStatus}>
          <button className={styles.deliveredButton}>Mark as delivered </button>
          </div>
          </div>
          </> 
          : 
          //if user is not logged in don't render anything here
          <> </>
          }
        </div>


              
        <div>
        {props.userLoggedIn ? 
        <>
        <br/>
        <div>Test:</div>
       
        <div className={styles.OrderStats}>
        <CustomerOrder orders={orders} jwt={jwt}/>
        <div className={styles.OrderStatus}>
       {/*  <button className={styles.deliveredButton}>Mark as delivered </button> */}
        </div>
        </div>
        </> 
        : 
        <> </>
        }
        </div>


            <div className={styles.onSale}>
            <img className={styles.ufo} src='ufo2.png' alt=''/>

            <div>User logged status: {props.userLoggedIn ? "is logged in" : "not logged in"} </div>
            </div>
            
            <p className={styles.categories}> Restaurants:</p>
            {restaurants.map(r => 
             /*  className={styles.optionmenu} */
              <div key={r.restaurant_id}>
              <Link to={{
                pathname: 'restaurantinfopage/'+ r.restaurant_id.toString()}}
                state= {{
                  r,
                }}
                >
                {r.restaurant_id}
                {r.restaurant_name}
                {r.restaurant_type}
                {r.open_hours}
                {r.price_level}
                {r.location}
              </Link>
              </div>
            )}

             {/*  <a href='foodcategoriespage' ><img src='buffet-pic.jpg' alt=''/></a>
              <a href='foodcategoriespage'><img src='fast-food-pic.jpg'alt=''/></a>
              <a href='foodcategoriespage'><img src='fast-casual-pic.jpg'alt=''/></a>
              <a href='foodcategoriespage'><img src='casual-dining-pic.jpg'alt=''/></a>
              <a href='foodcategoriespage'><img src='fine-dining-pic.jpg'alt=''/></a>
              <a href='foodcategoriespage'><img src='plus-sign-pic.jpg'alt=''/></a> */}


              <br/>            
            
      
      </header>
      </div>
  );
  }


export default Frontpage;
