import React from 'react'
import styles from './Frontpage.module.css';
import {useLocation} from 'react-router-dom';


function Frontpage(props) {

  const location = useLocation();


  return (
    <div className="App">
      <header className={styles.background}>

      <div>
        
        </div>
            <div className={styles.onSale}>
            <img className={styles.ufo} src='ufo2.png' alt=''/>

            <div>User logged status: {props.userLoggedIn ? "is logged in" : "not logged in"} </div>
            </div>
            
            <p className={styles.categories}> Food types:</p>
            <li className={styles.optionmenu}>


            {/* <a> <button onClick={()=>{toBuffetRest(restaurant)}}><img src='buffet-pic.jpg'/></button></a> */}



              <a href='foodcategoriespage' ><img src='buffet-pic.jpg' alt=''/></a>
              <a href='foodcategoriespage'><img src='fast-food-pic.jpg'alt=''/></a>
              <a href='foodcategoriespage'><img src='fast-casual-pic.jpg'alt=''/></a>
              <a href='foodcategoriespage'><img src='casual-dining-pic.jpg'alt=''/></a>
              <a href='foodcategoriespage'><img src='fine-dining-pic.jpg'alt=''/></a>
              <a href='foodcategoriespage'><img src='plus-sign-pic.jpg'alt=''/></a>


              <br/>            
            </li>
      
      </header>
      </div>
  );
  }


export default Frontpage;
