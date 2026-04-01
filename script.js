const apikey = "029d7cad6d0c4055905152615262603";
function getWeather(city){
    const url = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=yes`;
    fetch(url)
    .then(response => response.json())
    .then(data =>
    {
  console.log(data)
    document.getElementsByTagName("h2")[0].innerHTML = `Weather for ${city}` + ` - ${data.current.condition.text}`
    document.querySelector(".temperature").getElementsByClassName("box")[0].innerHTML = `<h2>${Math.round(data.current.temp_c)}&deg;C</h2>
                        <img src="${data.current.condition.icon}" alt="">
                      <p>Temperature is ${data.current.temp_f}F</p>
                     <p>Feels Like ${Math.round(data.current.feelslike_c)}&deg;C</p>
                      <p>Clouds ${data.current.cloud}%</p>
                        <button>Sign up for free</button>`

    document.querySelector(".humidity").getElementsByClassName("box")[0].innerHTML = `<h2>${data.current.humidity} %</h2>
                    <p>Wind Degree is ${data.current.wind_degree}&deg;</p>
                     <p>Feels Like ${data.current.feelslike_c}&deg;C</p>
                      <p>Humidity is ${data.current.humidity}%</p>`

    document.querySelector(".wind").getElementsByClassName("box")[0].innerHTML = `<h2>${Math.round(data.current.wind_kph)} km/hr</h2>
                    <p>Wind Speed is ${data.current.wind_kph}km/h</p>
                     <p>Pressure is ${data.current.pressure_in}inHg</p>
                      <p>Visibility is ${data.current.vis_km}km</p>`

    clear.addEventListener("click",()=>{
      document.getElementsByTagName("input")[0].value = ""
    })
    

})
       
}

function tab_city() {
  let cities = ["Shangai","Boston","Lucknow","Kolkata"]
  let table = document.querySelector(".weather-table")
  cities.forEach(city =>{
    fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=yes`)
    .then(res=> res.json())
    .then(data=> {
      console.log(data)
      table.innerHTML +=`<td>${city}</td>
                <td>${data.current.cloud}</td>
                <td>${Math.round(data.current.feelslike_c)}</td>
                <td>${data.current.humidity}</td>
                <td>${Math.round(data.current.temp_c)}</td>
                <td>${Math.round(data.current.dewpoint_c)}</td>
                <td>${data.current.precip_in}</td>
                <td>${Math.round(data.current.heatindex_c)}</td>
                <td>${data.current.wind_kph}</td>
                <td>${data.current.wind_degree}</td>
                <td>${data.current.windchill_c}</td>`
    })
  })
}

document.getElementsByTagName("button")[0].addEventListener("click",()=>{
  let city = document.getElementById("srch").value;
  getWeather(city);
})
getWeather("Dehradun");
tab_city();