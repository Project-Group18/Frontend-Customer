import React from 'react'
import Frontpage from './components/Frontpage';
import Managerfrontpage from './components/Managerfrontpage';
import Restaurantaccountpage from './components/Restaurantaccountpage';
import Header from './components/Header';
import HeaderSignedIn from './components/HeaderSignedIn';
import SearchbarLocation from './components/SearchbarLocation';
import Footer from './components/Footer';
import CustomerMyAccountPage from './components/CustomerMyAccountPage';
import ManagerOrderHistoryPage from './components/ManagerOrderHistoryPage';
import SearchResultPage from './components/SearchResultPage';
import FoodCategoriesPage from './components/FoodCategoriesPage';
import RestaurantInfoPage from './components/RestaurantInfoPage';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import TempCustomerList from './components/TempCustomerList';
import RestaurantDisplayComponent from './components/RestaurantDisplayComponent';
import { useState, useEffect } from 'react';
import api from './api/config';

function App() {
  const [restaurants, setRestaurant ] = useState([]);
  const [customers, setCustomer ] = useState([]);
  const [dishes, setDish ] = useState([]);

  useEffect(() => {
    const fetchRestaurant =  async () => {
    try {const res = await api.get('/restaurant');
    console.log(res);
    setRestaurant(res.data)
    } catch (err) {//Not in 200 response range
        console.log(err);
    }}
    fetchRestaurant();
}, [])

useEffect(() => {
  const fetchCustomer =  async () => {
      try {const res = await api.get('/customer');
      console.log(res);
      setCustomer(res.data)
      } catch (err) {//Not in 200 response range
          console.log(err);
      }}
      fetchCustomer();
  }, [])


  useEffect(() => {
    const fetchDish =  async () => {
        try {const res = await api.get('/dish');
        console.log(res);
        setDish(res.data)
        } catch (err) {//Not in 200 response range
            console.log(err);
        }}
        fetchDish();
    }, [])


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
      dId: 1,
      dName: 'Pizza',
      dCategory: 'Fast Food',
      dPrice: '10,90 €', 
      dRestaurant: 'Mario\'s Pizzeria'
    },
    {
      dId: 2,
      dName: 'Pizza2',
      dCategory: 'Fast Food',
      dPrice: '12,90 €', 
      dRestaurant: 'Mario\'s Pizzeria'
    },
    {
      dId: 3,
      dName: 'Kebab Pizza',
      dCategory: 'Fast Food',
      dPrice: '12,50 €', 
      dRestaurant: 'Mario\'s Pizzeria'
    },
    {
      dId: 4,
      dName: 'Reindeer Pizza',
      dCategory: 'Fast Food',
      dPrice: '14,90 €', 
      dRestaurant: 'Mario\'s Pizzeria'
    }
  ];
  
  return (

    <div>
<Router>
        <div className="App" style={{ display:"flex", justifyContent: "space-around" }}>
        <Link to='/'>Logged out</Link>
        <Link to='/customersignedin'>Customer Signed in</Link>
        </div>
<Routes>
  <Route path="/"element={<Header/>}/>
  <Route path="/customersignedin"element={<HeaderSignedIn/>}/>

</Routes>

</Router>

<Router>
      <div className="App" style={{ display:"flex", justifyContent: "space-around" }}>
        <Link to='/'>Frontpage</Link>
        <Link to='/managerfrontpage'>Manager frontpage </Link>
        <Link to='/restaurantaccountpage'>Restaurant account page</Link>
        <Link to='/managerorderhistorypage'>Manager Order History</Link>
        <Link to='/customermyaccountpage'>Customer Account Page</Link>
        <Link to='/searchresultpage'>Search Result Page</Link>
        <Link to='/foodcategoriespage'>Food Categories Page</Link>
        <Link to='/restaurantinfopage'>Restaurant Info Page</Link>
        <Link to='/displaycomponent'>Restaurant display component</Link>
        <Link to='/customerspage'>See the list of customers</Link>
      </div>

       <SearchbarLocation/>

    <Routes>

      <Route path="/" element={<Frontpage/>}/>
      <Route path="/restaurantaccountpage"element={ <Restaurantaccountpage/>}/>
      <Route path="/managerfrontpage"element={orderData.map(element => <Managerfrontpage {...element}/>)}/>
      <Route path="/managerorderhistorypage"element={orderData.map(element => <ManagerOrderHistoryPage {...element}/>)}/>
      <Route path="/customermyaccountpage"element={orderData.map(element => <CustomerMyAccountPage {...element}/>)}/>
      <Route path="/searchresultpage" element={dishData.map(element => <SearchResultPage {...element}/>)}/>
      <Route path="/customerspage" element={ <TempCustomerList customers={ customers}/>}/>
        <Route path="/customerspage/:customerID" element={ <CustomerMyAccountPage customers={ customers}/>}/>
      <Route path="/foodcategoriespage" element={ <FoodCategoriesPage restaurants={ restaurants} dishes={dishes }/>}/>   
        <Route path="foodcategoriespage/:restaurantID" element={<RestaurantInfoPage restaurants={ restaurants} dishes={dishes} />}/>
      <Route path="/displaycomponent"element={restaurants.map(element => <RestaurantDisplayComponent {...element}/>)}/>
    </Routes>
   </Router>

      
     <Footer/>
       
      
    </div>
      
  );
  }
export default App;