async function fetchTemperature() {
    const displayElement = document.getElementById('temperatureDisplay');
    try {
      const response = await fetch('http://104.214.177.30:3001/getTemperature');
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
  
  setInterval(fetchTemperature, 5000);

  window.onload = fetchTemperature;