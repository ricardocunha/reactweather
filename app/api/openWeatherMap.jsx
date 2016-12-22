var axios = require('axios');

const API_URL = 'http://api.openweathermap.org/data/2.5/find?appid=5e205e230af45d4633d389ce7cc09283&units=metric&q=';

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestURL = `${API_URL}&q=${encodedLocation}`;

    return axios.get(requestURL).then(function (res){
      if (res.data.cod && res.data.message && res.data.count != 1){
        throw new Error(res.data.message);
      } else {
        return res.data.list[0].main.temp;
      }
    }, function(res){
      throw new Error(res.data.message);
    });
  }
};
