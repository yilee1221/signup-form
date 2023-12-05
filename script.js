const submitButton = document.querySelector('button');
const password = document.querySelector('#password');
const requirements = document.querySelector('.requirements');
const confirmpw = document.querySelector('#confirm');
const error = document.querySelector('.error');

function confirmPassword() {
    if (confirmpw.value === password.value) {
        error.textContent = "";
    }
    else {
        error.textContent = "Passwords do not match";
    }
}

password.addEventListener('input', confirmPassword);
confirmpw.addEventListener('input', confirmPassword);   

function checkPassword() {
    if (password.checkValidity()) {
        requirements.textContent = "";
    }
    else {
        requirements.textContent = "Minimum 8 characters, one uppercase and lowercase letter, one number, one special character";
    }
}

password.addEventListener('input', checkPassword);