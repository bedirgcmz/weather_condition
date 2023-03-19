const url = "https//api.openweathermap.org/data/2.5/";
const key = "fac2a36d5df449986d616d40e0017107";

const displayResult = (result) => {
  let city = document.querySelector(".city");
  city.innerText = `${result.name}, ${result.sys.country}`;
  let temp = document.querySelector(".temp");
  temp.innerText = `${Math.round(result.main.temp)}°C`;

  let desc = document.querySelector(".desc");
  desc.innerText = result.weather[0].description;

  let minmax = document.querySelector(".minmax");
  minmax.innerText = `${Math.round(result.main.temp_min)}°C /
    ${Math.round(result.main.temp_max)}°C`;
};

const introFunction = () => {
  let newQuery = `https://api.openweathermap.org/data/2.5/weather?q=stockholm&appid=${key}&units=metric&lang=en`;
  fetch(newQuery)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResult);
};
introFunction();

const button = document.querySelector("#search");

button.addEventListener("click", function () {
  const searchBar = document.querySelector("#searchBar").value;
  let newQuery = `https://api.openweathermap.org/data/2.5/weather?q=${searchBar}&appid=${key}&units=metric&lang=en`;
  fetch(newQuery)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResult);
});
