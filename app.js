async function getWeather(){
    const city=document.getElementById("city").value;
    if (!city){
        alter("Please enter a city name")
        return
    }
    const apiKey='4ceeeeff3d404fb782360535252002'
    const url=`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`

try{
    const response=await fetch(url)
    if(!response.ok){
        throw new Error("OOPS! City not found")
    }
    else{
    const data=await response.json();
    document.getElementById("result").innerHTML=`<div class="weather-info">
                <p><strong>Location:</strong> ${data.location.name}, ${data.location.country}</p>
                <p><strong>Local Time: </strong>${data.location.localtime}</p>
                <p><strong>Temperature:</strong> ${data.current.temp_c}°C</p>
                <p><strong>Condition:</strong> ${data.current.condition.text}</p>
                <p><img src="${data.current.condition.icon}" alt="Weather Icon" class="weather-icon"></p>
            </div>`
    }
}
catch (error) {
    document.getElementById("result").innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
}
}
