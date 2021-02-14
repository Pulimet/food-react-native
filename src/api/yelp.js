import axios from "axios";

export default  axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer hHz3uAH57O2j90on6PVeKIdtuKkwQ_ZRl_peChweYOR43uCxWqb5L7s3Z4yg9eZZmq8Wo1uuSm0qjPDB94W5TNe7_smD2lvuRzvVtkDGgi81BWl3S1pOx4C57kYFYHYx'
    }
});