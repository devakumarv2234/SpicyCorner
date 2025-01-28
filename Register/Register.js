
const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputs = {
    fullname: document.getElementById('fullname'),
    email: document.getElementById('email'),
    username: document.getElementById('username'),
    password: document.getElementById('password'),
    confirmPassword: document.getElementById('confirmPassword'),
  };

  const errors = {
    fullname: document.getElementById('fullnameError'),
    email: document.getElementById('emailError'),
    username: document.getElementById('usernameError'),
    password: document.getElementById('passwordError'),
    confirmPassword: document.getElementById('confirmPasswordError'),
  };

  // Reset all errors
  Object.values(errors).forEach(error => error.style.display = 'none');
  Object.values(inputs).forEach(input => input.classList.remove('error-border'));

  let isValid = true;

  // Validate full name
  if (!inputs.fullname.value.trim()) {
    errors.fullname.style.display = 'inline';
    inputs.fullname.classList.add('error-border');
    isValid = false;
  }

  // Validate email
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!inputs.email.value.trim() || !emailRegex.test(inputs.email.value)) {
    errors.email.style.display = 'inline';
    inputs.email.classList.add('error-border');
    isValid = false;
  }

  // Validate username
  if (!inputs.username.value.trim()) {
    errors.username.style.display = 'inline';
    inputs.username.classList.add('error-border');
    isValid = false;
  }

  // Validate password
  if (!inputs.password.value.trim()) {
    errors.password.style.display = 'inline';
    inputs.password.classList.add('error-border');
    isValid = false;
  }

  // Confirm password
  if (inputs.password.value !== inputs.confirmPassword.value) {
    errors.confirmPassword.style.display = 'inline';
    inputs.confirmPassword.classList.add('error-border');
    isValid = false;
  }

  if (isValid) {
    alert('Registration successful!');
    window.location.href = 'login.html';
  }
});
