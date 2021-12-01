import React, {useState} from 'react'
import jwt from 'jsonwebtoken';
import api from '../api/config_customer';


function Payload(props) {

    const [customers, setCustomers] = useState([]);
    const decodedToken = jwt.decode(props.jwt);
    console.log("following is the decoded token")
    console.log(decodedToken);

    //the first request to use the jwt, these will be used for the 
    const loadDataWithJWT = async () => {
        try {
            const res = await api.get('/customers',
            {
                headers: {
                    'Authorization': 'Bearer ' + props.jwt
                }
            }
            );
            console.log(res);
            setCustomers(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <h2>this is the payload of the token</h2> 


            <div> 
               User Id: {decodedToken.user.id} <br/>
                User email {decodedToken.user.email} <br/>
            </div>

            <div>
                <button onClick={loadDataWithJWT}>Click for a list of customers with JWT</button>
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
