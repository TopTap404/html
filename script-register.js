document.getElementById('registerform').addEventListener('submit', function (e) {
  e.preventDefault();  // ป้องกันไม่ให้ฟอร์มรีเฟรชหน้าจอ

  // ดึงข้อมูลจากฟอร์ม
  const email = document.getElementById('email').value;
  const cfpassword = document.getElementById('cfpassword').value;
  const password = document.getElementById('password').value;

  // กำหนด URL ของ API (ใช้ IP หรือโดเมนจริง)
  const apiUrl = 'http://localhost:3001/register';  // หรือ https://api.example.com/login

  if (password == cfpassword) {
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),  // ส่งข้อมูลไปในรูปแบบ JSON
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // ถ้าการเข้าสู่ระบบสำเร็จ
          alert('Register successful');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  } else {
    console.error('Error:Password not Match');
  }
});