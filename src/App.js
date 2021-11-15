import React from 'react'
import Frontpage from './components/Frontpage';
import Managerfrontpage from './components/Managerfrontpage';
import Restaurantaccountpage from './components/Restaurantaccountpage';
import Header from './components/Header';
import Footer from './components/Footer';
import ObsPopup from './components/ObsPopup';
import { useState } from 'react';
import CustomerMyAccountPage from './components/CustomerMyAccountPage';

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
const customerInfo = [
  {
    cName: 'Twilight Sparkle',
    cAddress: 'Equestria',
    cCreditCardNumber: '12345', 
    cEmail: 'twilight@email.com', 
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
      {
      customerInfo.map(element1 =><CustomerMyAccountPage cName={element1.cName} cAddress={element1.cAddress} cCreditCardNumber={element1.cCreditCardNumber} cEmail={element1.cEmail}/>)
      }

    </div>

  
      
  );
  }
export default App;
