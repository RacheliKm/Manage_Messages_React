import axios from "axios"
import { UsersDetails } from "../types/usersDetails"

class userService {
     getPostList() {
        return axios.get("https://jsonplaceholder.typicode.com/posts")
    }
    async insertPost(usersDetails:UsersDetails) {
        return axios.post("https://jsonplaceholder.typicode.com/posts",usersDetails)
    }
}

//בעת יצירת סרביס אנחנו ניצור אובייקט חדש עי המילה new
export default new userService