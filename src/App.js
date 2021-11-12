import React from 'react'
import Frontpage from './components/Frontpage';
import Managerfrontpage from './components/Managerfrontpage';
import Restaurantaccountpage from './components/Restaurantaccountpage';


function App() {
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
      <Frontpage/>
      {
        orderData.map(element => <Managerfrontpage orderNumber= {element.orderNumber} address= {element.address} customerName= {element.customerName} phoneNumber= {element.phoneNumber} orderId= {element.orderId} message= {element.message} notes= {element.notes}/>)
      }
      <Restaurantaccountpage/>
    </div>

  
      
  );

  }
export default App;
