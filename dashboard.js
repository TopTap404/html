function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;

    // เพิ่ม 0 นำหน้าถ้าตัวเลขน้อยกว่า 10
    const formatNumber = num => (num < 10 ? '0' + num : num);

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const dayName = days[now.getDay()];
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    document.getElementById('date').textContent = `${dayName}, ${day.toString().padStart(2, '0')} ${month} ${year}`;
    document.getElementById('hours').textContent = formatNumber(hours);
    document.getElementById('minutes').textContent = formatNumber(minutes);
    document.getElementById('ampm').textContent = ampm;
}

async function fetchTemperature() {
    const displayElement = document.getElementById('temperatureDisplay');
    try {
      const response = await fetch('http://localhost:3001/getTemperature');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      const temperature = data.temperature;
  
      displayElement.textContent = temperature !== null
        ? `Temperature : ${temperature} °C`
        : "No temperature data available.";
    } catch (error) {
      console.error('Error fetching temperature:', error);
      displayElement.textContent = "Loading Temperature..";
    }
  }

setInterval(fetchTemperature, 1000);
setInterval(updateClock, 1000);

// เรียกฟังก์ชันทันทีเมื่อโหลดหน้า
window.onload = updateClock();
window.onload = fetchTemperature();
