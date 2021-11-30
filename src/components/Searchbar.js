import React from 'react'
import styles from './Header.module.css'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import api from '../api/config';

export default function Searchbar() {

 const [searchTerm, setSearchTerm] = React.useState("");
  const [restaurants, setRestaurants ] = useState([]);
  const [dishes, setDishes ] = useState([]);
 

      //get all restaurants
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
      //get all dishes
    useEffect(() => {
      api.get('/dishes')
        .then(res => {
            console.log(res);
            setDishes(res.data)
        })
      .catch (function (err) {//Not in 200 response range
          console.log(err);
      })
  }, [])


  useEffect(() => {
  const results = 
  restaurants.filter((restaurant)=> restaurant.restaurant_name.includes(searchTerm) 
/*   +
  dishes.filter((dish)=> dish.dish_name.includes(searchTerm)  */
  /* || dishes.filter((dish)=> dish.dish_name.includes(searchTerm)) */
  );

  
   


  setRestaurants(results);
}, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };


    return (
        <div>
            <div className={styles.search}> 

              <input className={styles.searchbar} 
              type="searchtext" 
              placeholder= "Search for restaurants or dishes" 
              value={searchTerm}
              onChange={handleChange}
             />

      <button onClick={console.log(restaurants)}><Link to= {{ pathname: '/searchresultpage/'}} 
       state={{
        restaurants, dishes
      }}
      >
                <div>Search</div>
        </Link></button>
            </div> 

            <div className={styles.location}> 
              <i class="fas fa-map-marker-alt"></i>
                <select id="location">
                  <option value="oulu">Oulu</option>
                  <option value="rovaniemi">Rovaniemi</option>
                  <option value="turku">Turku</option>
                </select>
              
            </div>

        </div>
    )
}
