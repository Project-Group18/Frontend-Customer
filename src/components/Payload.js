import React, {useState, useEffect} from 'react'
import jwt from 'jsonwebtoken';
import api from '../api/config_customer';


function Payload(props) {

    const [customers, setCustomer] = useState([]);
    const decodedToken = jwt.decode(props.jwt);
    console.log("following is the decoded token")
    console.log(decodedToken);
 

//get all customers from customer table
    useEffect(() => {
    const loadCustomersWithJWT =  async () => {
    try {const res = await api.get('/customers',
    {
        //we need to add an authorization token from app.js to 
        //access authenticated requests.
        headers: {
            'Authorization': 'Bearer ' +props.jwt
        }
    }
    );
    console.log(res);
    setCustomer(res.data)
    } catch (err) {//Not in 200 response range
        console.log(err);
    }}
    loadCustomersWithJWT();
}, [])


    return (
        <div>
            <h2>this is the payload of the token</h2> 

            <div> 
               User Id: {decodedToken.user.id} <br/>
                User email {decodedToken.user.email} <br/>
            </div>

     
            <br/>
            <table>
                {customers.map(c => 
                <tr>
                    <td>{c.customer_id}</td>
                    <td>{c.customer_name}</td>
                    <td>{c.customer_email}</td>
                    <td>{c.home_address}</td>
                    <td>{c.credit_card}</td>
                    <td>{c.customer_password}</td>
                </tr>)}

            </table>

        </div>
    )
}

export default Payload
