import React from 'react'
import styles from './FrontpageLoggedIn.module.css';
import CustomerOrder from './CustomerOrder'
/* import FoodCategoriesPage from './FoodCategoriesPage';
  import { useNavigate } from 'react-router-dom'; */

function FrontpageLoggedIn(props) {

/*   const navigate = useNavigate(); */

/*   const toBuffetRest=(props)=>{
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
  }; */
  

  return (
    <div className="App">
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
            <div className={styles.onSale}>
            <img className={styles.ufo} src='ufo2.png' alt=''/>
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


export default FrontpageLoggedIn;
