// Get the password input and toggle icon
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

// Add a click event listener to the toggle icon
togglePassword.addEventListener('click', function () {
  // Toggle the type attribute of the password input
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);

  // Toggle the eye icon between fa-eye and fa-eye-slash
  this.classList.toggle('fa-eye');
  this.classList.toggle('fa-eye-slash');
});