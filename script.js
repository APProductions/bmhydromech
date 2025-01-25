// Initialize EmailJS
(function() {
  emailjs.init("Gc2sdu3o3-bQ_G1n5"); // Replace with your EmailJS user ID
})();

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting normally

  // Collect form data
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // EmailJS template parameters
  const templateParams = {
    from_name: name,
    from_number: number,
    from_email: email,
    from_message: message,
  };

  // Send the email using EmailJS
  emailjs.send("service_9xtzdoq", "template_7u9yefo", templateParams)
    .then(function(response) {
      alert("Message sent successfully!");
      console.log("SUCCESS!", response.status, response.text);
    }, function(error) {
      alert("Failed to send message. Please try again.");
      console.error("FAILED...", error);
    });
});
