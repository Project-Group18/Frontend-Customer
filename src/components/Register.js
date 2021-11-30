import React from 'react'
import styles from './Register.module.css'
import api from '../api/config_new';
import {useNavigate} from 'react-router-dom'

function RegisterPopUp(props) {
    //uncomment when you add a route for this component to redirect to
    /* const navigate = useNavigate();   */ 

    const handleSignupSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.name.value);
        console.log(event.target.email.value);
        console.log(event.target.password.value);
        console.log(event)
        /* Couldn't get this function to be asynchronous */
        try {const res = api.post('/customer', 
        {
            customer_name: event.target.name.value,
            customer_email: event.target.email.value,
            customer_password: event.target.password.value
        })
        console.log(res);

        //this is where the redirecting to another page occurs after a successful register 
        /* navigate('') */
        } catch (error) {
            console.log(error);
        }
    }


//get all restaurants from restaurant table
/* useEffect(() => {
    const fetchRestaurant =  async () => {
    try {const res = await api.get('/restaurants');
    console.log(res);
    setRestaurant(res.data)
    } catch (err) {//Not in 200 response range
        console.log(err);
    }}
    fetchRestaurant();
}, []) */




    return (props.trigger) ? (
        <div className={styles.popup}>
            <div className={styles.popup_inner}>
                <div className= {styles.popup_text_container}>
                <h2>Sign up to the service</h2>
                <form onSubmit ={handleSignupSubmit} >
                    <p>*Name</p>
                    <input type="text" name="name" placeholder="Enter your name"></input>
                    <p>*Email</p>
                    <input type="text" name="email" placeholder="Enter email"></input>
                    <p>*Password:</p>
                    <input type="text" name="password" placeholder="Enter password"></input>
                    <br></br>
                    
                    <button className={styles.registerButton}>Register now!</button>
                </form>
                </div>
                <button className={styles.closeButton} onClick={() => props.setTrigger(false)}>&times;</button>
            </div>
        </div>
    ) : "";
}

export default RegisterPopUp