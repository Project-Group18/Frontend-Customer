import React from 'react'
import styles from './Header.module.css'
import { useState } from 'react';

/* import RegisterPopUp from './RegisterPopUp.js'; */



export default function Header(props) {

    const {countCartItems} = props;
    console.log("countCartItems")
    console.log(countCartItems)
    const [buttonShoppingCart, setButtonShoppingCart] = useState(false);
    const [buttonLogin, setButtonLogin] = useState(false);
/*     const [buttonRegister, setButtonRegister] = useState(false); */
    return (
            <div>
                <div className={styles.Headercontainer}>
                    <a href='/' ><img className={styles.image} src='olivertwistLogo1.jpg'/></a>
                    <div className={styles.Account}>
                        {/* These links were changed from buttons to hrefs because I couldn't redirect from a popup window */}
                        {/*  Error: useNavigate() may be used only in the context of a <Router> component. */}
                        <div>
                            {props.userLoggedIn ? 
                            <>
                                {/* If user is logged in, render these buttons */}
                                <button > <a href='/accountpage' > My account</a></button>
                                <button onClick={props.logout} ><a href='/'> Log out</a></button>
                                {/* <a href='/shoppingcartpage'>
                                    <i className={styles.shoppingcart}className="fas fa-shopping-cart">
                                        Cart {' '}
                                        {countCartItems ? (
                                            <button>{countCartItems}</button>
                                        ): (
                                            ''
                                        )}
                                    </i>
                                </a> */}
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
                {/* <LoginPopUp trigger ={buttonLogin} setTrigger ={setButtonLogin}/> */}
                {/*  <RegisterPopUp trigger={buttonRegister} setTrigger ={setButtonRegister}/> */}
                {/* <ShoppingCartPopUp trigger={buttonShoppingCart} setTrigger ={setButtonShoppingCart}/> */}
            </div>
    )
}
