import React from 'react'
import styles from './Frontpage.module.css';
import FoodCategoriesPage from './FoodCategoriesPage';
  import { useNavigate } from 'react-router-dom';

function Frontpage(props) {

  const navigate = useNavigate();

  const toBuffetRest=(props)=>{
    navigate('customermyaccountpage',
{state:{id:props.customer_id}})        
  };
  const toFastFoodRest=(props)=>{
    navigate('customermyaccountpage',
{state:{id:props.customer_id}})        
  };
  const toFastCasualRest=(props)=>{
    navigate('customermyaccountpage',
{state:{id:props.customer_id}})        
  };
  const ToCasualDiningRest=(props)=>{
    navigate('customermyaccountpage',
{state:{id:props.customer_id}})        
  };
  const ToFineDiningRest=(props)=>{
    navigate('customermyaccountpage',
{state:{id:props.customer_id}})        
  };
  const toExtra=(props)=>{
    navigate('customermyaccountpage',
{state:{id:props.customer_id}})        
  };
  

  return (
    <div className="App">
      <header className={styles.background}>

      <div>
        
        </div>
            <div className={styles.onSale}>
            <img className={styles.ufo} src='ufo2.png' alt='picture'/>
            </div>
            
            <p className={styles.categories}> Food types:</p>
            <li className={styles.optionmenu}>


            {/* <a> <button onClick={()=>{toBuffetRest(restaurant)}}><img src='buffet-pic.jpg'/></button></a> */}


              <a href='foodcategoriespage' ><img src='buffet-pic.jpg' /></a>
              <a href='foodcategoriespage'><img src='fast-food-pic.jpg'/></a>
              <a href='foodcategoriespage'><img src='fast-casual-pic.jpg'/></a>
              <a href='foodcategoriespage'><img src='casual-dining-pic.jpg'/></a>
              <a href='foodcategoriespage'><img src='fine-dining-pic.jpg'/></a>
              <a href='foodcategoriespage'><img src='plus-sign-pic.jpg'/></a>

              <br/>            
            </li>
      
      </header>
      </div>
  );
  }


export default Frontpage;
