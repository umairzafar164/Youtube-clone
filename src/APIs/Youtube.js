import axios from 'axios';
const KEY='AIzaSyCxO1-8I_9mH8vIt-8KJjAMp76kSrIEtME';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part :'snippet',
        maxResults : 5,
        key:KEY
    }
})
