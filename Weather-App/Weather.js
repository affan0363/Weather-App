const apikey="11eb1c72c255b60bfd4293eee5e3e7bb";
    const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const serachBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

// fetch the Data from API
async function checkWeather(city){
    const response=await fetch(apiurl +city+`&appid=${apikey}`)

    if(response.status==404){
                    document.querySelector(".error").style.display="block";
                    document.querySelector(".weather").style.display="none";
            }
            else{
            var data=await response.json();
            
document.querySelector('.weather').style.display = "flex"
            }

//  Display Data
document.querySelector('.city').innerHTML = data.name;
document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "'C";
document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";

if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "./images/cloud.png"
}
else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "./images/rain.png"
}
else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "./images/drizzle.png"
}
else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "./images/mist.png"
}
            }
            searchBtn.addEventListener("click", () =>{
                checkWeather(serachBox.value);
            })