var axios = require('axios');
var searchQ ;
const EDAMAM_RECIPE_URL = 'https://api.edamam.com/search?'+ searchQ + 'app_id=f135b876&app_key=acdb60a92956d657fa8aacf40beb71c6';








module.exports={
getEdamam: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${EDAMAM_RECIPE_URL}&q=${encodedLocation}&from=0&to=100`;

    return axios.get(requestUrl, {crossDomain: true , withCredentials: false}).then(function(res){
      return res.data.hits;
    },function(res) {
      throw new Error(res.data.message);
    })
  },
}
