import React from 'react'
import Frontpage from './components/Frontpage';
import Managerfrontpage from './components/Managerfrontpage';
import Restaurantaccountpage from './components/Restaurantaccountpage';
import Header from './components/Header';
import Footer from './components/Footer';
import ObsPopup from './components/ObsPopup';
import { useState } from 'react';


function App() {
const [buttonPopup, setButtonPopup] = useState(false);  
const orderData = [
  {
    orderNumber: '',
    address: '',
    customerName: '', 
    phoneNumber: '', 
    orderId: '', 
    message: '',
    notes: '',
  }
];


  return (
    <div>
      <Header/>
      <Frontpage/>
        <button onClick={() => setButtonPopup(true)}>Open obs popup</button>
        <ObsPopup trigger={buttonPopup} setTrigger ={setButtonPopup}/>
      <Footer/>
      {
        orderData.map(element => <Managerfrontpage orderNumber= {element.orderNumber} address= {element.address} customerName= {element.customerName} phoneNumber= {element.phoneNumber} orderId= {element.orderId} message= {element.message} notes= {element.notes}/>)
      }
      <Restaurantaccountpage/>
      

    </div>

  
      
  );
  }
export default App;
