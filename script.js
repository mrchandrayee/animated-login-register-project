const wrapper = document.getElementById("authWrapper");
const showSignUp = document.getElementById("showSignUp");
const showSignIn = document.getElementById("showSignIn");

showSignUp.addEventListener("click", () => wrapper.classList.add("right-panel-active"));
showSignIn.addEventListener("click", () => wrapper.classList.remove("right-panel-active"));

function setStatus(element, message, error = false) {
  element.textContent = message;
  element.classList.toggle("error", error);
}

document.getElementById("signinForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("signinEmail");
  const password = document.getElementById("signinPassword");
  const status = document.getElementById("signinStatus");
  if (!email.value.trim() || !password.value) {
    setStatus(status, "Please enter your email and password.", true);
    return;
  }
  if (!email.validity.valid) {
    setStatus(status, "Please enter a valid email address.", true);
    email.focus();
    return;
  }
  if (password.value.length < 6) {
    setStatus(status, "Password must be at least 6 characters.", true);
    password.focus();
    return;
  }
  setStatus(status, "Demo sign-in validated. Connect an authentication API for real login.");
});

document.getElementById("signupForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("signupName");
  const email = document.getElementById("signupEmail");
  const password = document.getElementById("signupPassword");
  const status = document.getElementById("signupStatus");
  if (!name.value.trim() || !email.value.trim() || !password.value) {
    setStatus(status, "Please complete all fields.", true);
    return;
  }
  if (!email.validity.valid) {
    setStatus(status, "Please enter a valid email address.", true);
    email.focus();
    return;
  }
  if (password.value.length < 6) {
    setStatus(status, "Password must be at least 6 characters.", true);
    password.focus();
    return;
  }
  setStatus(status, "Demo registration validated. Connect a backend to create the account.");
});

document.getElementById("forgotLink").addEventListener("click", (event) => {
  event.preventDefault();
  const email = document.getElementById("signinEmail");
  const status = document.getElementById("signinStatus");
  if (!email.value.trim()) {
    setStatus(status, "Enter your email address to request a password reset.", true);
    email.focus();
  } else if (!email.validity.valid) {
    setStatus(status, "Please enter a valid email address.", true);
  } else {
    setStatus(status, `Password reset can be requested for ${email.value.trim()} after backend setup.`);
  }
});

document.querySelectorAll(".social").forEach((button) => {
  button.addEventListener("click", () => {
    const form = button.closest("form");
    const status = form.querySelector(".form-status");
    setStatus(status, `${button.dataset.provider} sign-in requires OAuth configuration.`);
  });
});
