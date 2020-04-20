import axios from "axios";

const instance = axios.create({
    baseURL: 'https://todotest-d27d7.firebaseio.com/'
})

export default instance