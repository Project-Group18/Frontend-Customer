import React from 'react'
import Frontpage from './components/Frontpage';
import Header from './components/Header';
import HeaderSignedIn from './components/HeaderSignedIn';
import Searchbar from './components/Searchbar';
import Footer from './components/Footer';
import CustomerMyAccountPage from './components/CustomerMyAccountPage';
import SearchResultPage from './components/SearchResultPage';
import FoodCategoriesPage from './components/FoodCategoriesPage';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import TempCustomerList from './components/TempCustomerList';
import { useState, useEffect } from 'react';
import api from './api/config';
import Errorpage from './components/Errorpage';
import RestaurantInfoPage from './components/RestaurantInfoPage';
import FrontpageLoggedIn from './components/FrontpageLoggedIn'; 

function App() {
  const [restaurants, setRestaurant ] = useState([]);
  const [customers, setCustomer ] = useState([]);
  const [dishes, setDish ] = useState([]);

//get all restaurants from restaurant table
  useEffect(() => {
    const fetchRestaurant =  async () => {
    try {const res = await api.get('/restaurants');
    console.log(res);
    setRestaurant(res.data)
    } catch (err) {//Not in 200 response range
        console.log(err);
    }}
    fetchRestaurant();
}, [])
//get all customers from customer table
useEffect(() => {
  const fetchCustomer =  async () => {
      try {const res = await api.get('/customers');
      console.log(res);
      setCustomer(res.data)
      } catch (err) {//Not in 200 response range
          console.log(err);
      }}
      fetchCustomer();
  }, [])

//get all dishes from dish table
  useEffect(() => {
    const fetchDish =  async () => {
        try {const res = await api.get('/dishes');
        console.log(res);
        setDish(res.data)
        } catch (err) {//Not in 200 response range
            console.log(err);
        }}
        fetchDish();
    }, [])


  const orders = [
    {
      order_id: 1,
      address: '',
      customerName: 'Cool', 
      message: '',
      status: 'Received',
    },
    {
      order_id: 2,
      address: '',
      customerName: 'Lame', 
      message: '',
      status: 'Delivering',
    },
    {
      order_id: 3,
      address: '',
      customerName: 'Fun', 
      message: '',
      status: 'Delivered',
    },
    {
      order_id: 4,
      address: '',
      customerName: 'Cute', 
      message: '',
      status: 'Delivered',
    }
  ];

  
  return (

    <div className="App">
<Header/>
{/* <HeaderSignedIn/> */}


<Router>
      <div style={{ display:"flex", justifyContent: "space-around" }}>
        <Link to='/'>Frontpage</Link>
        <Link to='/frontpageloggedin'>FrontpageLoggedIn</Link>
        <Link to='/customermyaccountpage'>Customer Account Page</Link>
        <Link to='/searchresultpage'>Search Result Page</Link>
        <Link to='/foodcategoriespage'>Food Categories Page</Link>
        <Link to='/restaurantinfopage'>Restaurant Info Page</Link>
        <Link to='/customerspage'>See the list of customers</Link>
        

        
      </div>

       <Searchbar/>

    <Routes>

      <Route path="/" element={<Frontpage/>}/>
      {/* <Route path="/customermyaccountpage"element={orders.map(element => <CustomerMyAccountPage {...element}/>)}/> */}
      <Route path="/frontpageloggedin" element={ <FrontpageLoggedIn orders={ orders}/>}/>
      <Route path="/searchresultpage" element={<SearchResultPage/> }/>
      <Route path="/customerspage" element={ <TempCustomerList customers={ customers}/>}/>
        <Route path="/customerspage/:customerID" element={ <CustomerMyAccountPage customers={ customers} orders={ orders }/>}/>
      <Route path="/foodcategoriespage" element={ <FoodCategoriesPage restaurants={ restaurants} dishes={dishes }/>}/>   
        <Route path="restaurantinfopage/:restID" element={<RestaurantInfoPage  dishes={dishes}  />}/>
      <Route path="*"element={<Errorpage />}/>  
    </Routes>
   </Router>

     <Footer/>
      
    </div>
  );
  }
export default App;