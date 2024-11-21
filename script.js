async function fetchTemperature() {
  const displayElement = document.getElementById('temperatureDisplay');
  try {
    const response = await fetch('http://104.214.176.253:3001/getTemperature');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const temperature = data.temperature;

    displayElement.textContent = temperature !== null
      ? `Current Temperature: ${temperature}°C`
      : "No temperature data available.";
  } catch (error) {
    console.error('Error fetching temperature:', error);
    displayElement.textContent = "Failed to fetch temperature data.";
  }
}

async function fetchHumidity() {
  const displayElement = document.getElementById('humidityDisplay');
  try {
    const response = await fetch('http://104.214.176.253:3001/getHumidity');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const humidity = data.humidity;

    displayElement.textContent = humidity !== null
      ? `Current Temperature: ${humidity}°C`
      : "No humidity data available.";
  } catch (error) {
    console.error('Error fetching humidity:', error);
    displayElement.textContent = "Failed to fetch humidity data.";
  }
}

setInterval(fetchTemperature, 5000);
setInterval(fetchHumidity, 5000);
window.onload = fetchTemperature;
window.onload = fetchHumidity;