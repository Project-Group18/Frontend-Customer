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

        console.log(event.target.name.value);
        console.log(event.target.email.value);
        console.log(event.target.password.value);
        console.log(event.target.creditcard.value);

        const postCustomer =  async () => {
        try {const res = await api.post('/customer', 
        {
            customer_name: event.target.name.value,
            customer_email: event.target.email.value,
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
    };

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
            break;
    }




    return (
            <div className={styles.background}>
                <h2>Sign up as a customer</h2>
                <form onSubmit ={handleSignupSubmit} >
                    <p>*Name</p>
                        <input type="text" name="name" placeholder="Enter your name"></input>
                    <p>*Email</p>
                        <input type="text" name="email" placeholder="Enter email"></input>
                    <p>*Password:</p>
                        <input type="text" name="password" placeholder="Enter password"></input>
                    <p>*CC:</p>
                        <input type="text" name="creditcard" placeholder="Enter credit card number"></input>
                    <br></br>
                    <div>
                        {signupUIControls}
                    </div>
                </form>
            </div>
    ) 


}
    export default Registerpage