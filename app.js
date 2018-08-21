const lugar = require("./lugar/lugar");

const clima = require("./clima/clima");

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección',
        demand: true

    }
}).argv;

let getTemperaturaDireccion = async(direccion) => {

    try {
        let ubicacion = await lugar.getLugar(direccion);
        let resp = await clima.getTemperatura(ubicacion.lat, ubicacion.lng);
        return "La temperatura de " + direccion + " es de " + resp.data.main.temp;

    } catch (err) {
        console.log(err);
        return "Ha habido un error inesperado al consultar la temperatura de " + direccion;
    }


};

getTemperaturaDireccion(argv.direccion)
    .then(temp => console.log(temp))
    .catch(err => console.log(err));