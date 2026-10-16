// ===== 1. Open and close the menu on phones =====
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("open");   // add the class if absent, remove it if present
});

// Close the menu when a link is clicked
const menuLinks = document.querySelectorAll("#menu a");
menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("open");
  });
});

// ===== 2. Contact form: check the fields =====
const form = document.getElementById("contact-form");
const result = document.getElementById("form-result");

form.addEventListener("submit", function (event) {
  event.preventDefault();   // stop the page from reloading

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    showResult("Please fill in all the fields.", "red");
  } else if (!email.includes("@") || !email.includes(".")) {
    showResult("Please enter a valid email address.", "red");
  } else if (message.length < 10) {
    showResult("Your message is too short (10 characters minimum).", "red");
  } else {
    showResult("Thank you " + name + "! Your message was sent.", "green");
    form.reset();
  }
});

// Small function to display a message with a color
function showResult(text, color) {
  result.textContent = text;
  result.style.color = color;
}
