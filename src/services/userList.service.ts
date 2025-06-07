import axios from "axios";
import {UserLogin} from '../types/userLogin';

class userService{
    getUserList() {
        return axios.get("https://jsonplaceholder.typicode.com/users")
    }


}
export default new userService