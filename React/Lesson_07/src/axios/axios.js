import axios from "axios";

export default axios.create({
    baseURL:'https://todotest-d27d7.firebaseio.com/'
})

