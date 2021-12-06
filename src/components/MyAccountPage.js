import React, { useState, useEffect} from 'react'
import styles from './CustomerMyAccountPage.module.css';
import CustomerOrder from './CustomerOrder';
import api from '../api/config_customer';
import jwtFromWeb from 'jsonwebtoken';
import apiCustomer from '../api/config_customer';

function MyAccountPage(props) {

    const [customerInfo, setCustomerInfo] = useState([]);
    const [customerOrders, setCustomerOrders] = useState([]);
    const {orders, jwt} = props;
    const decodedToken = jwtFromWeb.decode(jwt);
    //load customer data with customer id
    useEffect(() => {
        const loadCustomerDataWithJwt =  async () => {
        try {const res = await api.get(decodedToken.user.id.toString(),
        {
            headers: {
                'Authorization': 'Bearer ' +props.jwt
            }
        }
        );
        console.log("customer data:")
        console.log(res);
        setCustomerInfo(res.data)
        } catch (err) {//Not in 200 response range
            console.log(err);
        }}
        loadCustomerDataWithJwt();
    }, [])

    //put request here which changes the user information and


    //get request here which gets all orders by customer ID
    //get all orders using customer id
    useEffect(() => {
    const loadOrdersWithJWT =  async () => {
    try {const res = await apiCustomer.get('getOrders/customer/'+decodedToken.user.id.toString(),
    {
    headers: {
    'Authorization': 'Bearer ' +jwt
    }
    }
    );
    console.log("order data:")
    console.log(res);
    setCustomerOrders(res.data)
    } catch (err) {//Not in 200 response range
    console.log(err);
    }}
    loadOrdersWithJWT();
  }, [])


    //old data. Can this be removed?
/*     const [name,setName]=useState(null);
    const [address,setAddress]=useState(null);
    const [cc,setCC]=useState(null);
    const [print,setPrint]=useState(false);

    const [setEditProfile] = useState(false);
    const [buttonLogOut, setButtonLogOut] = useState(false);
    
    const location = useLocation();

    function getName(val) {
        setName(val.target.value)
        setPrint(false)
    }
    function getAddress(val) {
        setAddress(val.target.value)
        setPrint(false)
    }
    function getCC(val) {
        setCC(val.target.value)
        setPrint(false)
    } */



    return (
        <div>
        
        <div class={styles.heading}><b>My Profile</b></div>
            <div class={styles.myaccountinfo}>
                {customerInfo.map(c => 
                <tr>
                    <div>Name:</div><input className={styles.searchbar} type="name" placeholder={c.customer_name}  ></input> 
                    <div>Default Address:</div><input className={styles.searchbar} type="address" placeholder= {c.home_address} ></input> 
                    <div>Credit card number:</div><input className={styles.searchbar} type="creditcard" placeholder= {c.credit_card} ></input>
                </tr>)}
            
            
            </div>
            <button class={styles.heading}>Save Changes</button>
        <div class={styles.heading}><b>Order History</b></div>
   
            <div> 
                <div className={styles.OrderInfoContainer}>
                <div className={styles.scrolldiv}>
                        <CustomerOrder orders={customerOrders} />
                </div>
            </div> 


    </div>
    </div>
    )
}

export default MyAccountPage
