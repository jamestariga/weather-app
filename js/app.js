import { API } from './api.js'

const API_KEY = API.key

window.addEventListener('load', async () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( async (position) => {
            let { latitude, longitude } = position.coords

            try {
                const resCurrent = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`)
                getCurrent(resCurrent.data)
                getImage(resCurrent.data.weather[0].icon)
                const resFuture = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`)
                getFuture(resFuture.data)
            } catch (err) {
                console.error(err)
            }
        })
    }
})

const getImage = (data) => {
    console.log(data)
    const weatherIcon = document.querySelector('.weather-icon')
    const img = document.createElement('img')

    if(data == '01d') {
        img.src = './img/sunny.png'
        weatherIcon.appendChild(img)
    } else if(data == '01n') {
        img.src = './img/full-moon.png'
        weatherIcon.appendChild(img)
    } else if(data == '02d') {
        img.src = './img/partly-cloudy.png'
        weatherIcon.appendChild(img)
    } else if(data == '02n') {
        img.src = './img/night.png'
        weatherIcon.appendChild(img)
    } else if(data == '03d' || data == '03n') {
        img.src = './img/scattered-cloud.png'
        weatherIcon.appendChild(img)
    } else if(data == '04d' || data == '04n') {
        img.src = './img/heavy-clouds.png'
        weatherIcon.appendChild(img)
    } else if(data == '09d') {
        img.src = './img/rainfall.png'
        weatherIcon.appendChild(img)
    } else if(data == '09n' || data == '10n') {
        img.src = './img/rainy-night.png'
        weatherIcon.appendChild(img)
    } else if(data == '10d') {
        img.src = './img/moderate-rain.png'
        weatherIcon.appendChild(img)
    } else if(data == '11d') {
        img.src = './img/storm-heavy-rain.png'
        weatherIcon.appendChild(img)
    } else if(data == '11n') {
        img.src = './img/stormy-night.png'
        weatherIcon.appendChild(img)
    } else if(data == '13d' || data == '13n') {
        img.src = './img/snow.png'
        weatherIcon.appendChild(img)
    } else if(data == '50d' || data == '50n') {
        img.src = './img/fog.png'
        weatherIcon.appendChild(img)
    }
}

const getCurrent = (data) => {
    console.log(data)
    const displayCity = document.querySelector('.city')
    const displayTemperature = document.querySelector('.temperature')
    const displayWeather = document.querySelector('.weather')
    const displayHumidity = document.querySelector('.humidity')

    const location = data.name
    const country = data.sys.country

    const { temp, humidity } = data.main

    const weather = data.weather[0].description

    const tempCel = Math.round((temp))

    displayCity.textContent = `${location}, ${country}`
    displayTemperature.textContent = tempCel + '°'
    displayWeather.textContent = 'Current: ' + weather
    displayHumidity.textContent = 'Humidity: ' + humidity
}

const getFuture = (response) => {
    console.log(response)
}
