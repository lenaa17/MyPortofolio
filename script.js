var typed = new Typed(".text", {
  strings: [
    " Mobile Developer",
    "Front-End Developer",
    "Undergraduate Student @BINUS",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
function sendMail() {
  const submitError = document.querySelector("#submit-error"); // Ensure you have this element in your HTML

  // Validate form fields
  if (
    !validateName() ||
    !validateEmail() ||
    !validateSubject() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please enter the form correctly";
    setTimeout(() => {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }

  // Initialize EmailJS
  //   emailjs.init("5OrdPYONW2myhPezj");

  // Prepare parameters for the email
  const params = {
    sendername: document.querySelector("#sendername").value,
    subject: document.querySelector("#subject").value,
    email: document.querySelector("#email").value,
    message: document.querySelector("#message").value,
    recipient_email: "fulgenciashaynalierue@gmail.com", // Add recipient email here if necessary
  };

  const serviceID = "service_pyyymx1";
  const templateID = "template_hrorymg";

  // Send the email
  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      // Success feedback
      console.log("Email sent successfully!", res.status, res.text);
      document.body.classList.add("active-popup");
      // Optionally clear form fields
      document.querySelector("#sendername").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#subject").value = "";
      document.querySelector("#message").value = "";
    })
    .catch((error) => {
      // Error handling
      console.error("Failed to send email:", error);
      submitError.style.display = "block";
      submitError.innerHTML = "Failed to send email. Please try again later.";
      setTimeout(() => {
        submitError.style.display = "none";
      }, 3000);
    });
}

function myFunction() {
  window.location.reload();
}

document
  .querySelector(".popup .close-btn")
  .addEventListener("click", function () {
    document.body.classList.remove("active-popup");
  });

var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var subjectError = document.getElementById("subject-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("btn send");

function validateName() {
  var name = document.getElementById("sendername").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }

  nameError.innerHTML = "";
  return true;
}

function validateEmail() {
  var email = document.getElementById("email").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }

  var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!email.match(emailPattern)) {
    emailError.innerHTML = "Email is invalid";
    return false;
  }

  emailError.innerHTML = "";
  return true;
}

function validateSubject() {
  var subject = document.getElementById("subject").value;

  if (subject.length == 0) {
    subjectError.innerHTML = "Subject is required";
    return false;
  }

  subjectError.innerHTML = "";
  return true;
}

function validateMessage() {
  var message = document.getElementById("message").value;
  var required = 20 - message.length;

  if (message.length == 0) {
    messageError.innerHTML = "Message is required";
    return false;
  }

  if (required > 0) {
    messageError.innerHTML = required + " more characters required";
    return false;
  }

  messageError.innerHTML = "";
  return true;
}
