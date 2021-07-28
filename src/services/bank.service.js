
import axios from 'axios';

const apiUrl = "http://localhost:4000";

 const authenticateUser=(username,password)=>{
    return axios.post(apiUrl+"/login",{
        "username":username,
        "password":password
    })
}


export default {
    authenticateUser
}
