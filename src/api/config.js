import axios from 'axios';

//access the public requests in the server

export default axios.create({
    baseURL: 'https://delivertwist18.herokuapp.com'
    
});

//localhost is for testing purposes only
//'http://localhost:3001/public'
//


