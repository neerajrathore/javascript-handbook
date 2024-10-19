// Select the elements for login and signup forms
const loginLink = document.querySelector(".login-link");
const signupLink = document.querySelector(".signup-link");
const loginForm = document.querySelector(".form-box.login");
const signupForm = document.querySelector(".form-box.signup");

// Function to show the signup form and hide the login form
signupLink.addEventListener("click", () => {
  loginForm.classList.remove("active");
  loginForm.classList.add("inactive");
  signupForm.classList.remove("inactive");
  signupForm.classList.add("active");
});

// Function to show the login form and hide the signup form
loginLink.addEventListener("click", () => {
  signupForm.classList.remove("active");
  signupForm.classList.add("inactive");
  loginForm.classList.remove("inactive");
  loginForm.classList.add("active");
});

// Initially display the login form
loginForm.classList.add("active");
signupForm.classList.add("inactive");



// Function to toggle password visibility
const toggleLoginPassword = document.getElementById("toggle-login-password");
const loginPasswordInput = document.getElementById("login-password");
const eyeIconLogin = document.getElementById("eye-icon-login");

toggleLoginPassword.addEventListener("click", () => {
  if (loginPasswordInput.type === "password") {
    loginPasswordInput.type = "text"; // Show password
    eyeIconLogin.setAttribute("name", "eye-outline"); // Change icon to 'eye'
  } else {
    loginPasswordInput.type = "password"; // Hide password
    eyeIconLogin.setAttribute("name", "eye-off-outline"); // Change icon to 'eye-off'
  }
});

// Similarly for signup
const toggleSignupPassword = document.getElementById("toggle-signup-password");
const signupPasswordInput = document.getElementById("signup-password");
const eyeIconSignup = document.getElementById("eye-icon-signup");

toggleSignupPassword.addEventListener("click", () => {
  if (signupPasswordInput.type === "password") {
    signupPasswordInput.type = "text"; // Show password
    eyeIconSignup.setAttribute("name", "eye-outline"); // Change icon to 'eye'
  } else {
    signupPasswordInput.type = "password"; // Hide password
    eyeIconSignup.setAttribute("name", "eye-off-outline"); // Change icon to 'eye-off'
  }
});


