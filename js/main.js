const API_KEY = 'ebe795ebf6c870cfa416082b86545598'
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    // console.log(url)
    document.getElementById('city-name').value = '';
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    setInnerText('city', temperature.name)
    setInnerText('temp', temperature.main.temp)
    setInnerText('condition', temperature.weather[0].main)
    // set weather icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute("src", url)
    // console.log(temperature)
}
