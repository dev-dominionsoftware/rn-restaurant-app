import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer wM51OeMeLWPSt6uHIXNBV3WaV0FwIDsW1Wc5GOg6wlBq3zd4qsOzScc7wk_mYeUs5zWcWqfJJu2aXwSimKB6hs8cpvWMLJ-LS-M6dq9RWb-RCbuPFBkpjwvB-decYXYx'
    }
});
