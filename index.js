async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "1fb5f77dc8285dc6ff696b936941224c"; // replace with your key

  if (!city) {
    document.getElementById("weatherInfo").innerHTML =
      `<p style="color:red;">⚠️ Please enter a city name.</p>`;
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found or API error");
    }

    const data = await response.json();

    const weatherInfo = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>🌡️ Temperature: ${data.main.temp}°C</p>
      <p>☁️ Condition: ${data.weather[0].description}</p>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">
    `;

    document.getElementById("weatherInfo").innerHTML = weatherInfo;
  } catch (error) {
    document.getElementById("weatherInfo").innerHTML =
      `<p style="color:red;">${error.message}</p>`;
  }
}
