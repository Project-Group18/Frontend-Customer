import React from 'react'
import styles from './CustomerMyAccountPage.module.css';
import CustomerOrder from './CustomerOrder';

function MyAccountPage(props) {


    //put request here which changes the user information and

    //get request here which gets all orders by customer ID



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
            <div>Name:</div><input className={styles.searchbar} type="name" placeholder="name"  /* onChange={getName} onChange={name} */></input> 
            <div>Default Address:</div><input className={styles.searchbar} type="address" placeholder= "address" /* onChange={getAddress} onChange={address} */></input> 
            <div>Credit card number:</div><input className={styles.searchbar} type="creditcard" placeholder= "cc" /* onChange={getCC} onChange={cc} */></input>
            </div>
            <button /* onClick={() => setPrint(true)} */class={styles.heading}>Save Changes</button>
        <div class={styles.heading}><b>Order History</b></div>
   
            <div> 
                <div className={styles.OrderInfoContainer}>
                <div className={styles.scrolldiv}>
                    {
                        props.orders.map(order => <CustomerOrder {
                        ...order} key = {order.order_id} />)
                    }
                </div>
            </div> 


    </div>
    </div>
    )
}

export default MyAccountPage
