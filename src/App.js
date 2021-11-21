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
import SearchResultPage from './components/SearchResultPage';
import FoodCategoriesPage from './components/FoodCategoriesPage';
import RestaurantInfoPage from './components/RestaurantInfoPage';
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
  const dishData = [
    {
      dName: 'Pizza',
      dCategory: 'Fast Food',
      dPrice: '10,90 €', 
      dRestaurant: 'Luigis Pizzeria'
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
        <Link to='/managerorderhistorypage'>Manager Order History</Link>
        <Link to='/customermyaccountpage'>Customer Account Page</Link>
        <Link to='/searchresultpage'>Search Result Page</Link>
        <Link to='/foodcategoriespage'>Food Categories Page</Link>
        <Link to='/restaurantinfopage'>Restaurant Info Page</Link>
        
        
      </div>
    <Routes>
      <Route path="/" element={<SearchbarLocation/>}/>
        <Route path=":frontpage" element={<Frontpage/>}/>
      <Route path="/restaurantaccountpage"element={ <Restaurantaccountpage/>}/>
      <Route path="/managerfrontpage"element={orderData.map(element => <Managerfrontpage {...element}/>)}/>
      <Route path="/managerorderhistorypage"element={orderData.map(element => <ManagerOrderHistoryPage {...element}/>)}/>
      <Route path="/customermyaccountpage"element={orderData.map(element => <CustomerMyAccountPage {...element}/>)}/>
      <Route path="/searchresultpage" element={dishData.map(element => <SearchResultPage {...element}/>)}/>
      <Route path="/foodcategoriespage" element={dishData.map(element => <FoodCategoriesPage {...element}/>)}/> 
      <Route path="/restaurantinfopage" element={dishData.map(element => <RestaurantInfoPage {...element}/>)}/>   
    </Routes>
   </Router>

      
     <Footer/>
       
      
     
      
        {/* <button onClick={() => setButtonPopup(true)}>Open obs popup</button> */}
       {/*  <ObsPopup trigger={buttonPopup} setTrigger ={setButtonPopup}/> */}

      
    </div>

  
      
  );
  }
export default App;
