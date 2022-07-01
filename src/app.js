function displayTemperature (response) {
   let temperatureElement = document.querySelector("#temperature");
   let cityElement = document.querySelector("#city");
   let descriptionElement = document.querySelector("#description");
   let humidityElement = document.querySelector("#humidity");
   let windElement = document.querySelector("#wind");
   let iconElement = document.querySelector("#icon");
   
   temperatureElement.innerHTML = Math.round(response.data.main.temp);
   cityElement.innerHTML = response.data.name;
   descriptionElement.innerHTML = response.data.weather[0].description;
   humidityElement.innerHTML = response.data.main.humidity;
   windElement.innerHTML = Math.round(response.data.wind.speed);
   iconElement.setAttribute ("src", `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
   iconElement.setAttribute ("alt", response.data.weather[0].description);
}





function search (city) {
   let apiKey = "d0e8d1110078fa650d02bce7e788ef46";
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
   axios.get(apiUrl).then(displayTemperature);
}

function getCity (event) {
   event.preventDefault();
   let inputCityElement = document.querySelector("#input-city");
   search(inputCityElement.value);
}

search ("New York");

let form = document.querySelector("form");
form.addEventListener("submit", getCity);

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

