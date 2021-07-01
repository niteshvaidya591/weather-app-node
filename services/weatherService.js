const dotenv = require("dotenv");
const axios = require('axios');

POST_singleWeather = async (body,res) => {
    let regex = /[a-zA-z]/;

if (regex.test(body.place) && body.place)
   {
    const url = process.env.WEATHER_API_URL + '?key=' + process.env.WEATHER_API_KEY + `&q=${body.place}&format=json`;
    const resp = await axios.get(url);
    return resp.data
   }
   else{
    return { message: "Entered city name is invalid" };
   }
};



module.exports = {
    POST_singleWeather
};
