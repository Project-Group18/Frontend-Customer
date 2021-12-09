import axios from 'axios';


//access customer side's protected requests
export default axios.create({
    baseURL: 'https://delivertwist18.herokuapp.com/customer'
    
});

//'http://localhost:3001/customer'
//


