const axios = require('axios');

const httpClientPlugin = {
    get: async(url) => {
        // const resp = await fetch(url);
        // return await resp.json();
        const resp = await axios(url);
        return resp.data;
    },
    post: async(url, body) => {},
    put: async(url, body) => {},
    delete: async(url) => {},
}


module.exports = {
    httpClientPlugin
}