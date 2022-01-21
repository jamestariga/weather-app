const API = YOU_API_KEY

window.addEventListener('load', async () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( async (position) => {
            let { latitude, longitude } = position.coords

            try {
                const res = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${API}`)
                getData(res)
            } catch (err) {
                console.error(err)
            }
        })
    }
})

const getData = (response) => {
    console.log(response)
    const displayCity = document.querySelector('.city')
    const displayTemperature = document.querySelector('.temperature')
    const displayWeather = document.querySelector('.weather')
    const displayHumidity = document.querySelector('.humidity')

    const { temp, humidity } = response.data.current

    const { timezone } = response.data

    const weather = response.data.current.weather[0].main

    const tempCel = Math.round((temp))

    displayCity.textContent = timezone
    displayTemperature.textContent = tempCel + '°'
    displayWeather.textContent = 'Current: ' + weather
    displayHumidity.textContent = 'Humidity: ' + humidity
}
