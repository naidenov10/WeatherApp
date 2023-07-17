const citySearch = document.querySelector('.citySearch');
let currentWeatherDisplay = document.querySelector('.currentWeather')
let cityDisplay = document.querySelector('.city');
let feelsLikeDisplay = document.querySelector('.feelsLike');
let windDisplay = document.querySelector('.wind');
let humidityDisplay = document.querySelector('.humidity');
let currentTempDisplay = document.querySelector('.currentTemp');
let toggleDiv = document.querySelector('.toggle-div')
let toggleButton = document.querySelector('.toggle-button')



citySearch.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getCity(citySearch.value);
    }
})

async function getCity (location) {
    try {
    citySearch.value = ''
    const search = await fetch(`https://api.weatherapi.com/v1/current.json?key=3b25c56c56724222908122632231207&q=${location}}`, {mode: 'cors'});
    const cityData = await search.json();
    // console.log(cityData)
    newDataWeather(cityData)
    }
    catch (error) {
        console.log(`Error ${error}`)
    }
    
}

function newDataWeather(newData){
    const city = newData.location.name;
    const country = newData.location.country;
    const humidity = newData.current.humidity;
    const feelsLike = newData.current.feelslike_c
    const wind = newData.current.wind_kph;
    const currentWeather = newData.current.condition.text;
    const temperature = newData.current.temp_c;

    currentWeatherDisplay.innerHTML = currentWeather;
    cityDisplay.innerHTML = `${city}, ${country}`;
    feelsLikeDisplay.innerHTML = `FEELS LIKE: ${feelsLike}C`;
    windDisplay.innerHTML = `WIND: ${wind} kph`;
    humidityDisplay.innerHTML = `HUMIDITY: ${humidity} %`
    currentTempDisplay.innerHTML = `${temperature}`
}






