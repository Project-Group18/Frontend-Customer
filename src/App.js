import React, { useState } from 'react'
import Frontpage from './components/Frontpage';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchResultPage from './components/SearchResultPage';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import RestaurantInfoPage from './components/RestaurantInfoPage'; 
import Registerpage from './components/Registerpage';
import LoginPage from './components/LoginPage';
import Payload from './components/Payload';
import MyAccountPage from './components/MyAccountPage';
import ShoppingCartPage from './components/ShoppingCartPage';
import FinalizeOrder from './components/FinalizeOrder';
import styles from './App.module.css'

//local storage space to hold the JWT
const jwtFromLocalStorage = window.localStorage.getItem('localStorageJWT');


function App() {

    const [userJWT, setUserJWT] = useState(jwtFromLocalStorage);
    //shopping cart list
    const [cartItems, setCartItems] = useState([]);
    //add item to shoppingcart (or increase quantity)
    const onAdd = (product) => {
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
  //remove item or (decrease quantity)
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
    //remove all items from cart
    const clearCart= () => {
      setCartItems([]);
    };
    //remove jwt token and log user out
    const logout= () => {
      setUserJWT(null)
    window.localStorage.removeItem('localStorageJWT');
    };

      //routes which are accessable only when user is not logged in
      let accessableRoutes = 
      <>
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
    <Route path="/payload"element={<Payload jwt={userJWT}/> }/>
    <Route path="/accountpage"element={<MyAccountPage jwt={userJWT}/> }/>
    <Route path="/shoppingcartpage/:finalizeorder"element={<FinalizeOrder clearCart={clearCart}/>} />
    </>
    }
    console.log("userJWT:");
    console.log(userJWT);

  
  return (

    <div className="App">

<Header />


  <Router>
      
    <div  className= {styles.barContainer}>
      {userJWT != null ? 
      <>
        <button className={styles.buttonContainer}> <a href='/accountpage' className={styles.buttonFont}> My account</a></button>
        <button onClick={logout} className={styles.buttonContainer}><a href='/' className={styles.buttonFont}> Log out</a></button>
      </>
      :
      <>
        {/* If user is not logged in, render these buttons */}
        <button className={styles.buttonContainer}> <a href='/loginpage' className={styles.buttonFont}> Log in</a></button>
        <button className={styles.buttonContainer}> <a href='/registerpage' className={styles.buttonFont}> Sign up</a></button>
      </>
      }

        <Link to='/'>
          <button className={styles.buttonContainer}>
                <div className={styles.buttonFont}>
                  Frontpage
                </div>
          </button>
        </Link>

          <Link to='/shoppingcartpage'>
            <button className={styles.buttonContainer}>
            <div className={styles.buttonFont}>Shopping Cart
              <i className={styles.shoppingcart}className="fas fa-shopping-cart">
              </i>
            </div>
            </button>
          </Link>
      </div>

    <Routes>

    <Route path="/shoppingcartpage"element={<ShoppingCartPage jwt={userJWT} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>} />
    <Route path="/restaurantinfopage/:restID"element={<RestaurantInfoPage onAdd={onAdd}/>}/>
    <Route path="/" element={<Frontpage userLoggedIn={userJWT != null} jwt={userJWT} />}/>
    <Route path="/searchresultpage" element={<SearchResultPage/> }/>  
    <Route path="*"element={<Frontpage/>}/>  
      {accessableRoutes}

    </Routes>
  </Router>

     <Footer/>
      
    </div>
  );
  }
export default App;