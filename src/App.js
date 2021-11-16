import React from 'react'
import Frontpage from './components/Frontpage';
import Managerfrontpage from './components/Managerfrontpage';
import Restaurantaccountpage from './components/Restaurantaccountpage';
import Header from './components/Header';
import HeaderSignedIn from './components/HeaderSignedIn';
import SearchbarLocation from './components/SearchbarLocation';
import Footer from './components/Footer';
import ObsPopup from './components/ObsPopup';
import { useState } from 'react';
import CustomerMyAccountPage from './components/CustomerMyAccountPage';
import ManagerOrderHistoryPage from './components/ManagerOrderHistoryPage';

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
      <SearchbarLocation/>
      <Frontpage/>
      <Footer/>
      
      <HeaderSignedIn/>
      <SearchbarLocation/>
      <Frontpage/>
      <Footer/>
      
        <button onClick={() => setButtonPopup(true)}>Open obs popup</button>
        <ObsPopup trigger={buttonPopup} setTrigger ={setButtonPopup}/>
      {
        orderData.map(element => <Managerfrontpage orderNumber= {element.orderNumber} address= {element.address} customerName= {element.customerName} phoneNumber= {element.phoneNumber} orderId= {element.orderId} message= {element.message} notes= {element.notes}/>)
      }
      <Restaurantaccountpage/>
      
      <HeaderSignedIn/>
      {
      customerInfo.map(element1 =><CustomerMyAccountPage cName={element1.cName} cAddress={element1.cAddress} cCreditCardNumber={element1.cCreditCardNumber} cEmail={element1.cEmail} />)
      }
      <Footer/>
      <HeaderSignedIn/>
      {
        orderData.map(element => <ManagerOrderHistoryPage orderNumber= {element.orderNumber} address= {element.address} customerName= {element.customerName} phoneNumber= {element.phoneNumber} orderId= {element.orderId} message= {element.message} notes= {element.notes}/>)
      }
      <Footer/>
    </div>

  
      
  );
  }
export default App;
