import React from 'react'
import styles from './Header.module.css'
import { useState } from 'react';
import LoginPopUp from './Login';
/* import RegisterPopUp from './RegisterPopUp.js'; */
import ShoppingCartPopUp from './ShoppingCart';

export default function Header(props) {

    const [buttonShoppingCart, setButtonShoppingCart] = useState(false);
    const [buttonLogin, setButtonLogin] = useState(false);
/*     const [buttonRegister, setButtonRegister] = useState(false); */
    return (
            <div>
                <div class={styles.Headercontainer}>
                    <a href='/' ><img className={styles.image} src='olivertwistLogo1.jpg'/></a>
                    <div className={styles.Account}>
                        {/* These links were changed from buttons to hrefs because I couldn't redirect from a popup window */}
                        {/*  Error: useNavigate() may be used only in the context of a <Router> component. */}
                        <div>
                            {props.userLoggedIn ? 
                            <>
                                {/* If user is logged in, render these buttons */}
                                <button > <a href='/loginpage' > My account</a></button>
                                <button onClick={props.logout}> Log out</button>
                                <i className={styles.shoppingcart} onClick={() =>setButtonShoppingCart(true)} class="fas fa-shopping-cart" ></i>
                            </>
                            :
                            <>
                                {/* If user is not logged in, render these buttons */}
                                <button > <a href='/loginpage' > Log in</a></button>
                                {/* <button onClick={() => setButtonLogin(true)}>Log in</button> */}
                                <button > <a href='/registerpage' > Sign up</a></button>
                            </>
                            }
                        </div>
                    </div>
                </div>
                {/* Check later if these can be implemented along with the popup windows */}
                <LoginPopUp trigger ={buttonLogin} setTrigger ={setButtonLogin}/>
                {/*  <RegisterPopUp trigger={buttonRegister} setTrigger ={setButtonRegister}/> */}
                <ShoppingCartPopUp trigger={buttonShoppingCart} setTrigger ={setButtonShoppingCart}/>
            </div>
    )
}
