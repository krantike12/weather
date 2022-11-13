
let content = document.getElementById("container2")
let city = document.getElementById("city")
let temp = document.getElementById("temp")
let feels = document.getElementById("feels")
let img = document.getElementById("imgIcon")




//Api data
//const url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`

const key = `d5d06f38168859042a64cdab1041697f` 

//fetch API
const getWeather = async(city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    const response = await fetch(url);
    const data = await response.json();
   console.log(data)
   return showWeather(data)
}

//Show Data
const showWeather = (data) => {

    if(data.cod=="404"){
        content.innerHTML = `
        <div class="content">
        <h2 id="city"> city Not found</h2>
        </div>`

        return;
    }
  content.innerHTML =  `
  <div class="content">
    <img id="imgIcon" src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    <h2 id="city">${data.name}</h2>
    </div>
    <div class="content2">
    <p id="feels">${data.weather[0].main} </p>
    <p id="temp">${data.main.temp}°C</p>
  </div>
  </div>
  `
}

function submit(){
    console.log(searching.value) 
   getWeather(searching.value)
}