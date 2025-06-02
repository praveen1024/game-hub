import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '321471999fd44bf3af2e9e4fa8b87580'
    }
})