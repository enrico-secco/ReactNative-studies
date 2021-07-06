import axios from 'axios';

const api = axios.create(
    { baseURL: 'https://free.currconv.com/api/v7' }
)

//https://free.currconv.com/api/v7/
//

export default api;