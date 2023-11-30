const submitButton = document.querySelector('button');
const password = document.querySelector('#password');
const confirmpw = document.querySelector('#confirm');
const error = document.querySelector('.error');

function checkPassword() {
    if (confirmpw.value === password.value) {
        error.textContent = "";
    }
    else {
        error.textContent = "Passwords do not match";
    }
}

password.addEventListener('input', checkPassword);
confirmpw.addEventListener('input', checkPassword);   

