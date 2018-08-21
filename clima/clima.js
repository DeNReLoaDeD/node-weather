const axios = require('axios');

const getTemperatura = async(lat, lng) => {
    return await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=2172201c6aeafe3de92ed22af62505c9`);
}

module.exports = {
    getTemperatura
}