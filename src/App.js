import React, { useState, useEffect } from 'react'
import Frontpage from './components/Frontpage';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import Footer from './components/Footer';
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
import MyAccountPage from './components/MyAccountPage';
import ShoppingCartPopUp from './components/ShoppingCart';
import ShoppingCartPage from './components/ShoppingCartPage';
import FinalizeOrder from './components/FinalizeOrder';
//local storage space to hold the JWT
const jwtFromLocalStorage = window.localStorage.getItem('localStorageJWT');

//local storage space to hold the shopping cart contents
const cartListFromStorage = window.localStorage.getItem('localCartStorage');

function App() {

 const [userJWT, setUserJWT] = useState(jwtFromLocalStorage);

  const [restaurants, setRestaurant ] = useState([]);
  const [customers, setCustomer ] = useState([]);
  const [dishes, setDish ] = useState([]);
  //shopping cart list

    const [cartItems, setCartItems] = useState([]);
   /*  const [cartItems, setCartItems] = useState(cartListFromStorage); */

  const onAdd = (product) => {

    //I cannot make a find function to a "null"
    const exist = cartItems.find(x=> x.dish_id === product.dish_id);

    if (exist) {
      console.log(product)
      console.log(" added existing product to cart")
      setCartItems(
        cartItems.map((x)=>
          x.dish_id === product.dish_id ? {...exist, qty: exist.qty +1}
          : 
          x
          )
          );
    }else {
      console.log(" added new product to cart")
      setCartItems([...cartItems, {...product, qty: 1}],
        );
    }
  };

  const onRemove = (product) => {

   const exist = cartItems.find((x) => x.dish_id === product.dish_id);
   if (exist.qty === 1) {
    setCartItems(cartItems.filter((x) =>
     x.dish_id !== product.dish_id
     ));
   } else {
    setCartItems(
      cartItems.map((x)=>
        x.dish_id === product.dish_id ? {...exist, qty: exist.qty -1}
        :
        x
        )
        );
   } 
  };

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
      status: 'Ready',
    }
  ];

  //keeps track of local cart items in local storage
  useEffect(() => {
    console.log("updated:")
   /*  window.localStorage.setItem('localCartStorage', JSON.stringify(cartItems)) */
    window.localStorage.setItem('localCartStorage', cartItems)
}, [cartItems])



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
    {/* <Route path="/customerspage"element={<TempCustomerList customers={ customers}/> }/> */}
    <Route path="/payload"element={<Payload jwt={userJWT}/> }/>
    <Route path="/accountpage"element={<MyAccountPage orders={orders}/>}/>
    <Route path="/restaurantinfopage/:restID"element={<RestaurantInfoPage onAdd={onAdd}/>}/>
    {/* <Route path="/shoppingcart"element={<ShoppingCartPopUp cartItems={cartItems} dishes={dishes}/>}/> */}
    <Route path="/shoppingcartpage"element={<ShoppingCartPage onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>} />
    <Route path="/shoppingcartpage/:finalizeorder"element={<FinalizeOrder/>} />
    
    </>
    }
    console.log("userJWT:");
    console.log(userJWT);



  
  return (

    <div className="App">
<Header /* countCartItems={cartItems.length} */ userLoggedIn={userJWT != null} customers={ customers} logout={()=> {
  setUserJWT(null)
  window.localStorage.removeItem('localStorageJWT');
  }}/>


<Router>

      
        <div style={{ display:"flex", justifyContent: "space-around" }}>
        {/* <Link to='/'>Frontpage</Link>
         <Link to='/searchresultpage'>Search Result Page</Link>  
        <Link to='/foodcategoriespage'>Food Categories Page</Link>*/}
        {/* <Link to='/restaurantinfopage'>Restaurant Info Page</Link> */}
        <Link to='/'>Frontpage</Link>
        <Link to='/customerspage'>See the list of customers</Link>
        <Link to='/registerpage'>Register page</Link>
        <Link to='/loginpage'>Login page</Link>
        <Link to='/payload'>Payload</Link>
        <Link to='/shoppingcartpage'>Cart page</Link>
   

      </div>


       <Searchbar/>

    <Routes>


    <Route path="/" element={<Frontpage userLoggedIn={userJWT != null} orders={orders}/>}/>
    <Route path="/searchresultpage" element={<SearchResultPage/> }/>
    <Route path="/foodcategoriespage" element={ <FoodCategoriesPage restaurants={ restaurants} dishes={dishes } />}/>   
     {/*  <Route path="restaurantinfopage/:restID" element={<RestaurantInfoPage  />}/> */}
    <Route path="*"element={<Errorpage />}/>  
    {accessableRoutes}
      

    </Routes>
   </Router>

     <Footer/>
      
    </div>
  );
  }
export default App;