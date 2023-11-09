require('dotenv').config()
const axios = require('axios')
const {
    APPID,
    CIDADE
} = process.env

let lat, lon

//Exercício 1)

const url1 = `http://api.openweathermap.org/geo/1.0/direct?q=${CIDADE}&limit=1&appid=${APPID}`

//Exercício 1)
const ex1 = async () => {
    const { data } = await axios.get(url1)
    for (let coordenadas of data) {
        console.log(`Latitude: ${coordenadas.lat}`)
        console.log(`Longitude: ${coordenadas.lon}`)
        lat = coordenadas.lat
        lon = coordenadas.lon
        ex2(lat, lon) 
    }
}

//Exercício 2)
const ex2 = async () => {
    const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APPID}`
    const { data } = await axios.get(url2)
        console.log(`Sensação Térmica: ${data.main.feels_like}`)
        console.log(`Descrição: ${data.weather[0].description}`)
}

ex1()
