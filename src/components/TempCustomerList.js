import React from 'react'
import { useNavigate } from 'react-router-dom';

function TempCustomerList(props) {

    const navigate = useNavigate();
    const toCustomerAccPage=(props)=>{
      navigate('customermyaccountpage',
    {state:{
        id:props.customer_id,
        name:props.customer_name, 
        email: props.customer_email, 
        address: props.home_address, 
        credit_card: props.credit_card, 
        password: props.customer_password}})        
    };


    return (
        <div>
            <br/>
            {props.customers.map(customer =>
      <div>
          <div> <button onClick={()=>{toCustomerAccPage(customer)}}> Customer {customer.customer_id} page</button></div>
                <br/>
                <div>Choose customer {customer.customer_id}</div>
                <ul>ID: {customer.customer_id}</ul>
                <ul>Name: {customer.customer_name}</ul>
                <ul>Email: {customer.customer_email}</ul>
                <ul>Address: {customer.home_address}</ul>
                <ul>Credit card: {customer.credit_card}</ul>
                <ul>password: {customer.customer_password}</ul>
                <br/>
      </div>
       )} 
        </div>
    )
}

export default TempCustomerList
