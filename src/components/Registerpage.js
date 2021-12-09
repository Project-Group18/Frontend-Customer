import styles from './RegisterPage.module.css';
import React, { useState } from 'react'
import api from '../api/config_new';
import { useNavigate } from 'react-router-dom';

function Registerpage() {

    const navigate = useNavigate();
    const [ signupProcessState, setSignupProcessState] = useState("idle")

   
    const handleSignupSubmit = (event) => {
        event.preventDefault();

        setSignupProcessState("processing");

        console.log(event.target.name.value.length);
        console.log(event.target.email.value.length);
        console.log(event.target.address.value.length);
        console.log(event.target.password.value.length);
        console.log(event.target.creditcard.value.length);

        if (
            event.target.name.value.length > 1 && 
            event.target.email.value.length > 5 && 
            event.target.email.value.includes("@") && 
            event.target.password.value.length >= 8 && 
            event.target.creditcard.value.length == 10 && 
            event.target.address.value.length > 4)
            {

        const postCustomer =  async () => {
        try {const res = await api.post('/customer', 
        {
            customer_name: event.target.name.value,
            customer_email: event.target.email.value,
            home_address: event.target.address.value,
            customer_password: event.target.password.value,
            credit_card: event.target.creditcard.value
            
        })
        console.log(res);
        setSignupProcessState("SignUpSuccessful");
        /* When the login is successful, the page redirects to the login page */
        setTimeout(() => {
            navigate('/loginpage', {replace: true})
        }, 1500)
        

        } catch (error) {
            console.log(error);
            setSignupProcessState("SignUpFailed");
        }
       
        } 
        postCustomer();
    
   
    } else {
        setSignupProcessState("SignUpFailed");
    }
}


    let signupUIControls = null;
    switch(signupProcessState) {
        case "idle":
            signupUIControls =<button className={styles.button} type="submit"><div className={styles.link}>Sign up</div></button>
            break;
        case "processing": 
            signupUIControls = <span style={{color:"blue"}}>Processing...</span>
            break;
        case "SignUpSuccessful":
            signupUIControls = <span style={{color:"green"}}>Sign up successful</span>
            break;

        case "SignUpFailed":
            signupUIControls = <span style={{color:"red"}}>Sign up failed</span>
            setTimeout(() => {
                window.location.reload(false);
            }, 2000);
            break;
    }




    return (
            <div className={styles.background}>
                <h2>Sign up as a customer</h2>
                <form onSubmit ={handleSignupSubmit} >
                    <p>*Name</p>
                        <input type="text" name="name" placeholder="Enter your name"></input>
                        <span> Note: Name must be at least 2 characters.</span>
                    <p>*Email</p>
                        <input type="text" name="email" placeholder="Enter email"></input>
                        <span> Note: Email must be at least 6 characters and contain "@".</span>
                    <p>*Default address</p>
                        <input type="text" name="address" placeholder="Enter default address"></input>
                        <span> Note: Address must be at least 5 characters.</span>
                    <p>*Password:</p>
                        <input type="text" name="password" placeholder="Enter password"></input>
                        <span> Note: Password must be at least 8 characters.</span>
                    <p>*CC:</p>
                        <input type="text" name="creditcard" placeholder="Enter credit card number"></input>
                        <span> Note: Credit card number must contain 10 characters.</span>                    
                    <br></br>
                    <div>
                        {signupUIControls}
                    </div>
                </form>
            </div>
    ) 


}
    export default Registerpage