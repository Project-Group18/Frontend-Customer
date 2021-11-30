import axios from 'axios';


//in the end produt there will be 3 different versions of this
//URL (public, customer, manager). Two of which will be on this application.
export default axios.create({
    baseURL: 'http://localhost:3001/customer/'
    
});

//''
//https://delivertwist18.herokuapp.com


