import React, { useState, useEffect } from 'react'
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
import api from './api/config';
import Errorpage from './components/Errorpage';
import RestaurantInfoPage from './components/RestaurantInfoPage'; 
import Registerpage from './components/Registerpage';
import LoginPage from './components/LoginPage';
import Payload from './components/Payload';


const jwtFromLocalStorage = window.localStorage.getItem('localStorageJWT');



function App() {

 const [userJWT, setUserJWT] = useState(jwtFromLocalStorage);

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


    //routes which are accessable only when user is not logged in
    let accessableRoutes = <>
      <Route path="/registerpage"element={<Registerpage />}/>  
      <Route path="/loginpage"element={<LoginPage login={ newJWToken => {
        setUserJWT(newJWToken)
      window.localStorage.setItem('localStorageJWT', newJWToken)
      }
      
      }/>}/>  
    </>

    //routes which are accessable only when user is logged in
    if (userJWT != null) {
      accessableRoutes =
    <>
    <Route path="/customerspage"element={<TempCustomerList customers={ customers}/> }/>
    <Route path="/payload"element={<Payload jwt={userJWT}/> }/>
    </>
    }
    console.log("userJWT:");
    console.log(userJWT);

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
<Header userLoggedIn={userJWT != null} customers={ customers} logout={()=> {
  setUserJWT(null)
  window.localStorage.removeItem('localStorageJWT');
  }}/>
{/* <HeaderSignedIn/> */}


<Router>
      
        <div style={{ display:"flex", justifyContent: "space-around" }}>
         <Link to='/'>Frontpage</Link>
        {/* <Link to='/customermyaccountpage'>Customer Account Page</Link>
        <Link to='/searchresultpage'>Search Result Page</Link> */}
        <Link to='/foodcategoriespage'>Food Categories Page</Link>
        {/* <Link to='/restaurantinfopage'>Restaurant Info Page</Link> */}

        <Link to='/customerspage'>See the list of customers</Link>
        <Link to='/registerpage'>Register page</Link>
        <Link to='/loginpage'>Login page</Link>
        <Link to='/payload'>Payload</Link>
   
      </div>


       <Searchbar/>

    <Routes>

    <Route path="/" element={<Frontpage userLoggedIn={userJWT != null}/>}/>
    <Route path="/customermyaccountpage"element={orderData.map(element => <CustomerMyAccountPage {...element}/>)}/>
    <Route path="/searchresultpage" element={<SearchResultPage/> }/>
      <Route path="/customerspage/:customerID" element={ <CustomerMyAccountPage customers={ customers}/>}/>
    <Route path="/foodcategoriespage" element={ <FoodCategoriesPage restaurants={ restaurants} dishes={dishes }/>}/>   
      <Route path="restaurantinfopage/:restID" element={<RestaurantInfoPage  dishes={dishes}  />}/>
    <Route path="*"element={<Errorpage />}/>  
    {accessableRoutes}
      

    </Routes>
   </Router>

     <Footer/>
      
    </div>
  );
  }
export default App;