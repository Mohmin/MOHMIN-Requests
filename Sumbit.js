function submitForm() {
  // احفظ قيم الحقول
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var service = document.getElementById('service').value;
  var message = document.getElementById('message').value;

  // قم بالتحقق من ملأ الحقول
  if (name.trim() === '' || email.trim() === '' || service.trim() === '' || message.trim() === '') {
      alert('Please fill in all fields.');
      return;
  }

  // قم بإنشاء الرسالة
  var discordMessage = `**New Contact Form Submission**\n**Name:** ${name}\n**Email:** ||${email}|| \n**Service:** ${service}\n**Message:** ${message} \n||@everyone||\n------------------------------------------`;

  // قم بإرسال الرسالة إلى Webhook
  var webhookURL = "https://discord.com/api/webhooks/1200764170547769344/vp1ogfpZFMfOT8YG87Wj9g4PClLeMbX18wVQY-XzdkdDV2xHrYxiY20XXq23Z5u6syRD"; // قم بتعديله برابط الويب هوك الخاص بك
  var xhr = new XMLHttpRequest();
  xhr.open("POST", webhookURL, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  // قم بتحويل الرسالة إلى تنسيق JSON
  var data = JSON.stringify({ content: discordMessage });

  // أرسل الطلب
  xhr.send(data);

  alert('Message sent successfully!');

}