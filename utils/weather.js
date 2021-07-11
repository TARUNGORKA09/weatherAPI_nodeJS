const axios   = require('axios');
const request = require('axios');

module.exports.getWeather = getWeather;

function getWeather(lat, long) {
    return new Promise((resolve, reject) => {
        let weatherUrl = `https://api.forecast.io/forecast/4a04d1c42fd9d32c97a2c291a32d5e2d/${lat},${long}`;
        axios.get(weatherUrl).then((response) => {
            if (response.body.status = 'OK') {
                let resultObj = {
                    temperature = response.data.currently.temperature,
                    apparentTemprature = response.data.apparentTemprature
                }
                resolve(resultObj);
            }else{
                throw new Error("Unable to get Weather report")
            }
        }).catch((err)=>{
            console.log(err.message)
            reject(err)
        });
    });
}
