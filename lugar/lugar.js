const axios = require('axios');

const getLugar = async(direccion) => {
    let encodedurl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedurl}`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error("No hay resultados para la direccion " + direccion);
    }

    let location = resp.data.results[0];

    return {
        direccion: location.formatted_address,
        lat: location.geometry.location.lat,
        lng: location.geometry.location.lng
    }
}

module.exports = {
    getLugar
}