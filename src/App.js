import React from 'react'
import Frontpage from './components/Frontpage';
import Managerfrontpage from './components/Managerfrontpage';
import Restaurantaccountpage from './components/Restaurantaccountpage';
import Header from './components/Header';
import HeaderSignedIn from './components/HeaderSignedIn';
import SearchbarLocation from './components/SearchbarLocation';
import Footer from './components/Footer';
import ObsPopup from './components/ObsPopup';
import CustomerMyAccountPage from './components/CustomerMyAccountPage';
import ManagerOrderHistoryPage from './components/ManagerOrderHistoryPage';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

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
<Router>
        <div className="App" style={{ display:"flex", justifyContent: "space-around" }}>
        <Link to='/'>Logged out</Link>
        <Link to='/signedin'>Logged in</Link>
        </div>
<Routes>
  <Route path="/"element={<Header/>}/>
  <Route path="/signedin"element={<HeaderSignedIn/>}/>
</Routes>

</Router>

<Router>
      <div className="App" style={{ display:"flex", justifyContent: "space-around" }}>
        <Link to='/'>Home</Link>
        <Link to='/restaurantaccountpage'>Restaurant account page</Link>
        <Link to='/managerfrontpage'>Manager frontpage </Link>
      </div>
    <Routes>
      <Route path="/" element={<SearchbarLocation/>}/>
        <Route path=":frontpage" element={<Frontpage/>}/>
      <Route path="/restaurantaccountpage"element={ <Restaurantaccountpage/>}/>
      <Route path="/managerfrontpage"element={orderData.map(element => <Managerfrontpage {...element}/>)}/>

    </Routes>
   </Router>

      
     <Footer/>
       
      
     
      
        {/* <button onClick={() => setButtonPopup(true)}>Open obs popup</button> */}
       {/*  <ObsPopup trigger={buttonPopup} setTrigger ={setButtonPopup}/> */}
      {
        
      } 
     {/*  <Restaurantaccountpage/> */}
      
    {/*   <HeaderSignedIn/> */}
      {/* {
      customerInfo.map(element1 =><CustomerMyAccountPage cName={element1.cName} cAddress={element1.cAddress} cCreditCardNumber={element1.cCreditCardNumber} cEmail={element1.cEmail} />)
      } */}
      {/* <HeaderSignedIn/> */}
      {/* {
        orderData.map(element => <ManagerOrderHistoryPage orderNumber= {element.orderNumber} address= {element.address} customerName= {element.customerName} phoneNumber= {element.phoneNumber} orderId= {element.orderId} message= {element.message} notes= {element.notes}/>)
      } */}
     
    </div>

  
      
  );
  }
export default App;
