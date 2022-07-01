function displayTemperature (response) {
   let temperatureElement = document.querySelector("#temperature");
   let cityElement = document.querySelector("#city");
   let descriptionElement = document.querySelector("#description");
   let humidityElement = document.querySelector("#humidity");
   let windElement = document.querySelector("#wind");
   temperatureElement.innerHTML = Math.round(response.data.main.temp);
   cityElement.innerHTML = response.data.name;
   descriptionElement.innerHTML = response.data.weather[0].description;
   humidityElement.innerHTML = response.data.main.humidity;
   windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "d0e8d1110078fa650d02bce7e788ef46";
let city = "Kyiv"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
axios.get(apiUrl).then(displayTemperature);

let now = new Date();
let dateElement = document.querySelector("#date");

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];

let hours = now.getHours();
if (hours < 10) {
   hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
   minutes = `0${minutes}`;
}

dateElement.innerHTML = `${day}, ${hours}:${minutes}`;

