import React from 'react'
import Frontpage from './components/Frontpage';
import Managerfrontpage from './components/Managerfrontpage';
import Restaurantaccountpage from './components/Restaurantaccountpage';
import Header from './components/Header';
import HeaderSignedIn from './components/HeaderSignedIn';
import Searchbar from './components/Searchbar';
import Footer from './components/Footer';
import CustomerMyAccountPage from './components/CustomerMyAccountPage';
import ManagerOrderHistoryPage from './components/ManagerOrderHistoryPage';
import SearchResultPage from './components/SearchResultPage';
import FoodCategoriesPage from './components/FoodCategoriesPage';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import TempCustomerList from './components/TempCustomerList';
import { useState, useEffect } from 'react';
import api from './api/config';
import Errorpage from './components/Errorpage';
import RestaurantInfoPage from './components/RestaurantInfoPage'; 

function App() {
  const [restaurants, setRestaurant ] = useState([]);
  const [customers, setCustomer ] = useState([]);
  const [dishes, setDish ] = useState([]);

//get all restaurants from restaurant table
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
//get all customers from customer table
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

//get all dishes from dish table
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
      orderNumber: 1,
      address: '',
      customerName: '', 
      phoneNumber: '', 
      orderId: '', 
      message: '',
      notes: '',
    },
    {
      orderNumber: 2,
      address: '',
      customerName: '', 
      phoneNumber: '', 
      orderId: '', 
      message: '',
      notes: '',
    },
    {
      orderNumber: 3,
      address: '',
      customerName: '', 
      phoneNumber: '', 
      orderId: '', 
      message: '',
      notes: '',
    },
    {
      orderNumber: 4,
      address: '',
      customerName: '', 
      phoneNumber: '', 
      orderId: '', 
      message: '',
      notes: '',
    }
  ];

  
  return (

    <div className="App">
<Router>
        <div style={{ display:"flex", justifyContent: "space-around" }}>
        <Link to='/'>Logged out</Link>
        <Link to='/customersignedin'>Customer Signed in</Link>
        </div>
<Routes>
  <Route path="/"element={<Header/>}/>
  <Route path="/customersignedin"element={<HeaderSignedIn/>}/>

</Routes>

</Router>

<Router>
      <div style={{ display:"flex", justifyContent: "space-around" }}>
{/*         <Link to='/'>Frontpage</Link>
        <Link to='/managerfrontpage'>Manager frontpage </Link>
        <Link to='/restaurantaccountpage'>Restaurant account page</Link>
        <Link to='/managerorderhistorypage'>Manager Order History</Link>
        <Link to='/customermyaccountpage'>Customer Account Page</Link>
        <Link to='/searchresultpage'>Search Result Page</Link>
        <Link to='/foodcategoriespage'>Food Categories Page</Link>
        <Link to='/restaurantinfopage'>Restaurant Info Page</Link>
        <Link to='/customerspage'>See the list of customers</Link>
*/}
        
      </div>

       <Searchbar/>

    <Routes>

      <Route path="/" element={<Frontpage/>}/>
      <Route path="/restaurantaccountpage"element={ <Restaurantaccountpage/>}/>
      <Route path="/managerfrontpage"element={orderData.map(element => <Managerfrontpage {...element}/>)}/>
      <Route path="/managerorderhistorypage"element={orderData.map(element => <ManagerOrderHistoryPage {...element}/>)}/>
      <Route path="/customermyaccountpage"element={orderData.map(element => <CustomerMyAccountPage {...element}/>)}/>
      <Route path="/searchresultpage" element={<SearchResultPage/> }/>
      <Route path="/customerspage" element={ <TempCustomerList customers={ customers}/>}/>
        <Route path="/customerspage/:customerID" element={ <CustomerMyAccountPage customers={ customers}/>}/>
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