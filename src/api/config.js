import axios from 'axios';

//in the end produt there will be 3 different versions of this
//URL (public, customer, manager). 
export default axios.create({
    baseURL: 'http://localhost:3001/public'
    
});

//localhost is for testing purposes only
//''
//https://delivertwist18.herokuapp.com


