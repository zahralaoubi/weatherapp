
const apiKey = '409460f3b3aff1f74c9b289ccfc58115';

async function getWeather() {
    const location = document.getElementById("location-input").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            alert("City not found! Please try again.");
            return;
        }

        
        document.getElementById("location").textContent = `${data.name}, ${data.sys.country}`;
        document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById("description").textContent = `Weather: ${data.weather[0].description}`;
        document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById("wind").textContent = `Wind Speed: ${data.wind.speed} m/s`;



    } catch (error){
        console.log(error)
    }
}
















