async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const apiKey = "32651eeefcb8286ff04cb989cc62638d";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    const resultDiv = document.getElementById("weatherResult");
    resultDiv.innerHTML = `
      <h3>🌆 ${data.name}, ${data.sys.country}</h3>
      <p>🌡️ Temperature: ${data.main.temp} °C</p>
      <p>🌤️ Condition: ${data.weather[0].main}</p>
      <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML =
      "❌ City not found. Please try again.";
  }
}
