import axios from 'axios';

const KEY = 'AIzaSyAObQL2N4JNZq11_Z4GDbx1jRe6d839yks';

const axios_req = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

export default axios_req;